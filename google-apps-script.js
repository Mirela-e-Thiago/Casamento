// Script DEFINITIVO para Google Apps Script - COM CORS resolvido
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  const timestamp = new Date().toLocaleString('pt-BR');
  const id = new Date().getTime();
  
  sheet.appendRow([
    data.name,
    data.children || 'Não',
    data.childrenCount || 0,
    timestamp,
    id
  ]);
  
  const output = ContentService.createTextOutput(JSON.stringify({
    success: true, 
    id: id,
    message: 'OK'
  }));
  
  output.setMimeType(ContentService.MimeType.JSON);
  
  // CORS headers - CRUCIAL para funcionar
  output.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  });
  
  return output;
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  let result = [];
  
  if (data.length > 1) {
    result = data.slice(1).map(row => ({
      id: row[4] || Date.now(),
      name: row[0] || '',
      children: row[1] || 'Não',
      timestamp: row[3] || ''
    }));
  }
  
  const output = ContentService.createTextOutput(JSON.stringify(result));
  output.setMimeType(ContentService.MimeType.JSON);
  
  // CORS headers para GET também
  output.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  
  return output;
}

// Função para lidar com requisições OPTIONS (preflight)
function doOptions(e) {
  const output = ContentService.createTextOutput('');
  output.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  });
  return output;
}

// Função de teste - Execute esta para testar o código
function testFunction() {
  console.log('=== TESTE INICIADO ===');
  
  // Teste 1: Testar doGet
  console.log('Testando doGet...');
  const getResult = doGet();
  console.log('Resultado doGet:', getResult.getContent());
  
  // Teste 2: Testar doPost (com dados simulados)
  console.log('Testando doPost...');
  const testData = {
    name: 'Teste Usuario',
    children: 'João, 5 anos',
    childrenCount: 1
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const postResult = doPost(mockEvent);
  console.log('Resultado doPost:', postResult.getContent());
  
  console.log('=== TESTE CONCLUÍDO ===');
}

// Função para testar apenas a leitura da planilha
function testReadSheet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  console.log('Dados da planilha:', data);
  return data;
}

// Função para testar apenas a escrita na planilha
function testWriteSheet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const timestamp = new Date().toLocaleString('pt-BR');
  const id = new Date().getTime();
  
  sheet.appendRow([
    'Teste Manual',
    'Criança Teste, 8 anos',
    1,
    timestamp,
    id
  ]);
  
  console.log('Linha adicionada com sucesso!');
  return 'OK';
}
