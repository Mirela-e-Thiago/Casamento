// Versão SIMPLIFICADA - Google Apps Script
// Use este código se o anterior não funcionar

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Verificar se recebemos dados
    if (!e || !e.postData) {
      return createResponse({success: false, error: 'Nenhum dado recebido'});
    }
    
    const data = JSON.parse(e.postData.contents);
    
    // Validar dados obrigatórios
    if (!data.name) {
      return createResponse({success: false, error: 'Nome é obrigatório'});
    }
    
    // Criar timestamp brasileiro
    const now = new Date();
    const timestamp = now.toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    const id = now.getTime();
    
    // Adicionar dados na planilha
    sheet.appendRow([
      data.name,                    // Coluna A
      data.children || 'Não',      // Coluna B
      data.childrenCount || 0,     // Coluna C
      timestamp,                   // Coluna D
      id                           // Coluna E
    ]);
    
    return createResponse({
      success: true, 
      id: id,
      message: 'Presença confirmada com sucesso!'
    });
    
  } catch (error) {
    return createResponse({
      success: false, 
      error: 'Erro interno: ' + error.toString()
    });
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const range = sheet.getDataRange();
    const values = range.getValues();
    
    // Se não há dados ou só cabeçalho
    if (values.length <= 1) {
      return createResponse([]);
    }
    
    // Pegar dados (pular primeira linha - cabeçalho)
    const dataRows = values.slice(1);
    
    const result = dataRows.map(row => ({
      id: row[4] || Date.now() + Math.random(),  // Coluna E
      name: row[0] || '',                        // Coluna A
      children: row[1] || 'Não',                 // Coluna B
      timestamp: row[3] || ''                    // Coluna D
    }));
    
    return createResponse(result);
    
  } catch (error) {
    return createResponse({error: 'Erro ao ler dados: ' + error.toString()});
  }
}

// Função auxiliar para criar resposta
function createResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// Função para configurar cabeçalhos da planilha
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Verificar se já tem cabeçalhos
  const firstRow = sheet.getRange(1, 1, 1, 5).getValues()[0];
  
  if (!firstRow[0] || firstRow[0] !== 'Nome') {
    // Adicionar cabeçalhos
    sheet.getRange(1, 1, 1, 5).setValues([[
      'Nome', 'Crianças', 'Quantidade_Crianças', 'Data_Hora', 'ID'
    ]]);
    
    // Formatar cabeçalhos
    const headerRange = sheet.getRange(1, 1, 1, 5);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#e6f3ff');
    
    console.log('Cabeçalhos configurados com sucesso!');
  } else {
    console.log('Cabeçalhos já existem.');
  }
}

// Teste completo
function runCompleteTest() {
  console.log('=== TESTE COMPLETO INICIADO ===');
  
  // 1. Configurar planilha
  setupSheet();
  
  // 2. Testar escrita
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Teste Completo',
        children: 'Ana, 6 anos',
        childrenCount: 1
      })
    }
  };
  
  const writeResult = doPost(testEvent);
  console.log('Resultado escrita:', writeResult.getContent());
  
  // 3. Testar leitura
  const readResult = doGet();
  console.log('Resultado leitura:', readResult.getContent());
  
  console.log('=== TESTE COMPLETO CONCLUÍDO ===');
}
