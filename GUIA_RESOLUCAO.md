# 🔧 Guia de Resolução - Erro "Failed to fetch"

## 🚨 O problema
Você está recebendo o erro `Failed to fetch` ao tentar enviar dados para o Google Sheets.

## ✅ Soluções (siga na ordem):

### **1. Verificar o Google Apps Script**

1. **Acesse**: https://script.google.com/
2. **Abra seu projeto** onde está o código
3. **SUBSTITUA** todo o código pelo que está no arquivo `google-apps-script.js`
4. **Salve** o projeto (Ctrl+S)
5. **Implante novamente**:
   - Clique em **"Implantar"** > **"Nova implantação"**
   - Tipo: **"Aplicativo da Web"**
   - Executar como: **"Eu"**
   - Quem tem acesso: **"Qualquer pessoa"**
   - Clique **"Implantar"**
6. **IMPORTANTE**: Copie a nova URL gerada

### **2. Testar a conexão**

1. **Abra** o arquivo `teste-api.html` no seu navegador
2. **Clique** em "Testar Conexão"
3. **Se aparecer erro**, siga para o próximo passo

### **3. Verificações no Google Apps Script**

#### ✅ Checklist importante:
- [ ] Script está salvo
- [ ] Script está implantado como "Aplicativo da Web"
- [ ] Permissão está como "Qualquer pessoa"
- [ ] Você autorizou as permissões quando solicitado
- [ ] A planilha tem os cabeçalhos corretos

#### 📊 Cabeçalhos da planilha (linha 1):
```
Nome | Crianças | Quantidade_Crianças | Data_Hora | ID
```

### **4. Se ainda não funcionar - Alternativa Simples**

Vamos usar uma abordagem mais simples. Substitua o código do Google Apps Script por este:

```javascript
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
  
  return ContentService
    .createTextOutput(JSON.stringify({success: true, id: id}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  if (data.length <= 1) {
    return ContentService
      .createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  const result = data.slice(1).map(row => ({
    id: row[4] || Date.now(),
    name: row[0] || '',
    children: row[1] || 'Não',
    timestamp: row[3] || ''
  }));
  
  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### **5. Passos para reimplantar:**

1. **Cole o código acima** no Apps Script
2. **Salve** (Ctrl+S)
3. **Clique em "Implantar"** > **"Gerenciar implantações"**
4. **Clique no ícone de edição** (lápis)
5. **Mude a versão** para "Nova versão"
6. **Clique "Implantar"**
7. **Copie a nova URL**

### **6. Atualizar a URL no seu site:**

Se você recebeu uma nova URL, atualize o arquivo `config.js`:

```javascript
GOOGLE_APPS_SCRIPT_URL: 'SUA_NOVA_URL_AQUI'
```

### **7. Teste final:**

1. **Abra** `teste-api.html`
2. **Teste** todas as funções
3. **Se funcionar**, teste no seu site principal

## 🆘 Se ainda não funcionar:

### **Opção A - Usar apenas localStorage (temporário):**
Os dados continuarão sendo salvos localmente e você pode exportar para Excel.

### **Opção B - Verificar logs:**
1. Abra o Google Apps Script
2. Vá em **"Execuções"** no menu lateral
3. Veja se há erros nos logs

### **Opção C - Permissões:**
1. No Apps Script, vá em **"Visão geral"**
2. Clique **"Executar"** na função `doPost`
3. Autorize todas as permissões solicitadas

## 📞 Status dos testes:

Use o arquivo `teste-api.html` para verificar:
- ✅ Conexão OK
- ✅ Envio de dados OK  
- ✅ Leitura de dados OK

Quando todos estiverem ✅, sua integração estará funcionando perfeitamente!
