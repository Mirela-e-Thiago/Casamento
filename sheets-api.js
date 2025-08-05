// Funções para integração com Google Sheets API

class SheetsAPI {
    static async submitAttendance(attendanceData) {
        try {
            // Mostrar loading
            const loadingMessage = document.getElementById('loadingMessage');
            if (loadingMessage) {
                loadingMessage.style.display = 'block';
                loadingMessage.textContent = CONFIG.MESSAGES.LOADING;
            }

            console.log('Enviando dados:', attendanceData);
            console.log('URL da API:', CONFIG.GOOGLE_APPS_SCRIPT_URL);

            const requestData = {
                name: attendanceData.name,
                children: attendanceData.children,
                childrenCount: this.countChildren(attendanceData.children)
            };

            console.log('Dados da requisição:', requestData);

            const response = await fetch(CONFIG.GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            });

            console.log('Status da resposta:', response.status);
            console.log('Response OK:', response.ok);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Resultado da API:', result);
            
            if (result.success) {
                // Salvar também no localStorage como backup
                this.saveToLocalStorage(attendanceData);
                console.log('Dados enviados com sucesso!');
                return result;
            } else {
                throw new Error(result.error || 'Erro desconhecido');
            }

        } catch (error) {
            console.error('Erro detalhado ao enviar dados:', error);
            
            // Salvar no localStorage como fallback
            this.saveToLocalStorage(attendanceData);
            console.log('Dados salvos localmente como backup');
            
            // Retornar erro para o usuário
            throw new Error(this.getErrorMessage(error));
        } finally {
            // Esconder loading
            const loadingMessage = document.getElementById('loadingMessage');
            if (loadingMessage) {
                loadingMessage.style.display = 'none';
            }
        }
    }

    static async loadAttendanceList() {
        try {
            console.log('Carregando dados da planilha...');
            console.log('URL da API:', CONFIG.GOOGLE_APPS_SCRIPT_URL);

            const response = await fetch(CONFIG.GOOGLE_APPS_SCRIPT_URL, {
                method: 'GET'
            });

            console.log('Status da resposta (GET):', response.status);
            console.log('Response OK (GET):', response.ok);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Dados recebidos da planilha:', data);
            
            if (Array.isArray(data)) {
                // Transformar dados do Google Sheets para o formato esperado
                const result = data.map(row => ({
                    id: row.id || Date.now() + Math.random(),
                    name: row.nome || row.name || '',
                    children: row.criancas || row.crianças || row.children || 'Não',
                    timestamp: row.data_hora || row.timestamp || new Date().toLocaleString('pt-BR')
                }));
                
                console.log('Dados transformados:', result);
                return result;
            } else {
                throw new Error('Formato de dados inválido');
            }

        } catch (error) {
            console.error('Erro ao carregar dados da planilha:', error);
            
            // Fallback para localStorage
            const localData = JSON.parse(localStorage.getItem('weddingAttendance')) || [];
            console.log('Usando dados locais como fallback:', localData);
            return localData;
        }
    }

    static saveToLocalStorage(attendanceData) {
        try {
            let attendanceList = JSON.parse(localStorage.getItem('weddingAttendance')) || [];
            attendanceList.push(attendanceData);
            localStorage.setItem('weddingAttendance', JSON.stringify(attendanceList));
        } catch (error) {
            console.error('Erro ao salvar no localStorage:', error);
        }
    }

    static countChildren(childrenText) {
        if (!childrenText || childrenText === 'Não' || childrenText.trim() === '') {
            return 0;
        }
        
        // Separar por vírgulas, quebras de linha ou pontos
        const children = childrenText.split(/[,\n.;]/)
            .map(child => child.trim())
            .filter(child => child !== '' && child !== 'Não');
        
        return children.length;
    }

    static getErrorMessage(error) {
        if (error.message.includes('fetch')) {
            return CONFIG.MESSAGES.NETWORK_ERROR;
        } else if (error.message.includes('timeout')) {
            return CONFIG.MESSAGES.TIMEOUT;
        } else {
            return CONFIG.MESSAGES.ERROR;
        }
    }

    // Sincronizar dados locais com a planilha (útil para recuperar dados offline)
    static async syncLocalDataToSheets() {
        try {
            const localData = JSON.parse(localStorage.getItem('weddingAttendance')) || [];
            const remoteData = await this.loadAttendanceList();
            
            // Encontrar dados que existem localmente mas não remotamente
            const localIds = localData.map(item => item.id);
            const remoteIds = remoteData.map(item => item.id);
            
            const missingData = localData.filter(item => !remoteIds.includes(item.id));
            
            // Enviar dados que estão faltando na planilha
            for (const data of missingData) {
                try {
                    await this.submitAttendance(data);
                    console.log('Sincronizado:', data.name);
                } catch (error) {
                    console.error('Erro ao sincronizar:', data.name, error);
                }
            }
            
            return true;
        } catch (error) {
            console.error('Erro na sincronização:', error);
            return false;
        }
    }
}
