// Integração com Google Sheets usando JSONP (sem problemas de CORS)

class SheetsAPIJSONP {
    
    // Enviar dados usando form submission (não tem problema de CORS)
    static async submitAttendance(attendanceData) {
        try {
            // Mostrar loading
            const loadingMessage = document.getElementById('loadingMessage');
            if (loadingMessage) {
                loadingMessage.style.display = 'block';
                loadingMessage.textContent = CONFIG.MESSAGES.LOADING;
            }

            console.log('Enviando dados via form:', attendanceData);

            // Criar form temporário
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = CONFIG.GOOGLE_APPS_SCRIPT_URL;
            form.target = 'result_' + Date.now(); // Target único
            form.style.display = 'none';

            // Adicionar dados como campos hidden
            const fields = {
                name: attendanceData.name,
                children: attendanceData.children || 'Não',
                childrenCount: this.countChildren(attendanceData.children || '').toString()
            };

            for (const [key, value] of Object.entries(fields)) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
            }

            // Criar iframe oculto para receber resposta
            const iframe = document.createElement('iframe');
            iframe.name = form.target;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            // Enviar form
            document.body.appendChild(form);
            form.submit();
            
            // Aguardar resposta e limpar
            setTimeout(() => {
                if (document.body.contains(form)) {
                    document.body.removeChild(form);
                }
                if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                }
            }, 3000);

            // Salvar também no localStorage como backup
            this.saveToLocalStorage(attendanceData);
            console.log('Dados enviados com sucesso!');
            
            return { success: true, message: 'Dados enviados' };

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            
            // Salvar no localStorage como fallback
            this.saveToLocalStorage(attendanceData);
            console.log('Dados salvos localmente como backup');
            
            throw new Error(this.getErrorMessage(error));
        } finally {
            // Esconder loading
            const loadingMessage = document.getElementById('loadingMessage');
            if (loadingMessage) {
                loadingMessage.style.display = 'none';
            }
        }
    }

    // Carregar dados usando JSONP
    static async loadAttendanceList() {
        return new Promise((resolve, reject) => {
            try {
                console.log('Carregando dados via JSONP...');
                
                // Criar callback único
                const callbackName = 'jsonpCallback_' + Date.now();
                
                // Definir callback global
                window[callbackName] = function(data) {
                    console.log('Dados recebidos via JSONP:', data);
                    
                    // Limpar callback
                    delete window[callbackName];
                    document.body.removeChild(script);
                    
                    if (Array.isArray(data)) {
                        const result = data.map(row => ({
                            id: row.id || Date.now() + Math.random(),
                            name: row.name || '',
                            children: row.children || 'Não',
                            timestamp: row.timestamp || ''
                        }));
                        
                        console.log('Dados transformados:', result);
                        resolve(result);
                    } else {
                        resolve([]);
                    }
                };

                // Criar script tag para JSONP
                const script = document.createElement('script');
                script.src = `${CONFIG.GOOGLE_APPS_SCRIPT_URL}?callback=${callbackName}`;
                script.onerror = function() {
                    console.error('Erro ao carregar dados via JSONP');
                    
                    // Limpar callback
                    delete window[callbackName];
                    document.body.removeChild(script);
                    
                    // Fallback para localStorage
                    const localData = JSON.parse(localStorage.getItem('weddingAttendance')) || [];
                    console.log('Usando dados locais como fallback:', localData);
                    resolve(localData);
                };
                
                document.body.appendChild(script);
                
                // Timeout após 10 segundos
                setTimeout(() => {
                    if (window[callbackName]) {
                        console.log('Timeout - usando dados locais');
                        delete window[callbackName];
                        if (document.body.contains(script)) {
                            document.body.removeChild(script);
                        }
                        
                        const localData = JSON.parse(localStorage.getItem('weddingAttendance')) || [];
                        resolve(localData);
                    }
                }, 10000);

            } catch (error) {
                console.error('Erro ao carregar dados:', error);
                
                // Fallback para localStorage
                const localData = JSON.parse(localStorage.getItem('weddingAttendance')) || [];
                console.log('Usando dados locais como fallback:', localData);
                resolve(localData);
            }
        });
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
}
