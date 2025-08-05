// Script DEFINITIVO para Google Apps Script - COM JSONP (sem CORS)
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Pegar dados do POST - pode vir como JSON ou form data
  let data;
  
  try {
    if (e.postData && e.postData.contents) {
      // Se veio como JSON
      data = JSON.parse(e.postData.contents);
    } else {
      // Se veio de um form HTML (e.parameter)
      data = e.parameter;
    }
  } catch (error) {
    // Se deu erro no JSON.parse, usar e.parameter
    data = e.parameter || {};
  }
  
  const timestamp = new Date().toLocaleString('pt-BR');
  const id = new Date().getTime();
  
  sheet.appendRow([
    data.name || 'Nome não informado',
    data.children || 'Não',
    data.childrenCount || 0,
    timestamp,
    id
  ]);
  
  // Retornar resposta simples para form submission
  return ContentService
    .createTextOutput('OK - Dados salvos com sucesso!')
    .setMimeType(ContentService.MimeType.TEXT);
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
  
  // Se tem callback (JSONP), usar JSONP
  if (e.parameter.callback) {
    const jsonpResponse = e.parameter.callback + '(' + JSON.stringify(result) + ');';
    return ContentService
      .createTextOutput(jsonpResponse)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  
  // Senão, retornar JSON normal
  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// Função de teste - Execute esta para testar o código
function testFunction() {
  console.log('=== TESTE INICIADO ===');
  
  // Teste 1: Testar doGet normal
  console.log('Testando doGet...');
  const getResult = doGet({parameter: {}});
  console.log('Resultado doGet:', getResult.getContent());
  
  // Teste 2: Testar doGet com JSONP
  console.log('Testando doGet JSONP...');
  const jsonpResult = doGet({parameter: {callback: 'testCallback'}});
  console.log('Resultado JSONP:', jsonpResult.getContent());
  
  // Teste 3: Testar doPost com form data
  console.log('Testando doPost com form data...');
  const testFormData = {
    name: 'Teste Usuario Form',
    children: 'João, 5 anos',
    childrenCount: '1'
  };
  
  const mockFormEvent = {
    parameter: testFormData
  };
  
  const postFormResult = doPost(mockFormEvent);
  console.log('Resultado doPost Form:', postFormResult.getContent());
  
  console.log('=== TESTE CONCLUÍDO ===');
}

// Função para testar apenas a escrita na planilha
function testWriteSheet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const timestamp = new Date().toLocaleString('pt-BR');
  const id = new Date().getTime();
  
  sheet.appendRow([
    'Teste Manual JSONP',
    'Criança Teste, 8 anos',
    1,
    timestamp,
    id
  ]);
  
  console.log('Linha adicionada com sucesso via JSONP!');
  return 'OK';
}
