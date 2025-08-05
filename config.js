// Configuração da integração com Google Sheets
const CONFIG = {
    // URL do Google Apps Script para integração com planilha
    GOOGLE_APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzwxV6t62SMpfNelxCbn0AV1sR2pZRVAtbhIgrMc6uE5E18A9VxbeSJvsjWT8Uwcw/exec',
    
    // Configurações de timeout
    REQUEST_TIMEOUT: 10000, // 10 segundos
    
    // Mensagens
    MESSAGES: {
        SUCCESS: 'Presença confirmada com sucesso!',
        ERROR: 'Erro ao confirmar presença. Tente novamente.',
        LOADING: 'Confirmando presença...',
        NETWORK_ERROR: 'Erro de conexão. Verifique sua internet.',
        TIMEOUT: 'Tempo limite excedido. Tente novamente.'
    }
};
