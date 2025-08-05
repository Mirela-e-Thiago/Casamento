# 🚀 Guia Simplificado - Sem CORS, Sem Complicação

## 📋 Passos para fazer funcionar (5 minutos):

### **1. No Google Apps Script:**
1. Acesse: https://script.google.com/
2. Abra seu projeto
3. **COLE TODO O CÓDIGO** do arquivo `google-apps-script.js`
4. **Salve** (Ctrl+S)

### **2. Testar o código:**
1. Na função selecionada, escolha **"testFunction"**
2. Clique em **"Executar"**
3. Deve aparecer no log: "=== TESTE CONCLUÍDO ==="

### **3. Implantar (IMPORTANTE):**
1. Clique em **"Implantar"** > **"Nova implantação"**
2. **Tipo:** Aplicativo da Web
3. **Executar como:** Eu
4. **Quem tem acesso:** **QUALQUER PESSOA** ⚠️
5. Clique **"Implantar"**
6. **Autorize** todas as permissões quando solicitado
7. **COPIE A URL** gerada

### **4. Se ainda der erro:**
1. Vá em **"Implantar"** > **"Gerenciar implantações"**
2. Clique no **ícone de lápis** (editar)
3. Mude **"Versão"** para **"Nova versão"**
4. Clique **"Implantar"**
5. **Copie a nova URL**

### **5. Verificar a planilha:**
Sua planilha deve ter estes cabeçalhos na **linha 1**:
```
Nome | Crianças | Quantidade_Crianças | Data_Hora | ID
```

### **6. Testar tudo:**
1. Abra `teste-api.html` no navegador
2. Clique **"Testar Conexão"**
3. Clique **"Enviar Dados de Teste"**
4. Clique **"Carregar Dados"**

Se todos derem ✅, está funcionando!

## 🔧 Código simplificado (sem verificações):

- ❌ Removido CORS
- ❌ Removido try/catch excessivo
- ❌ Removido validações de segurança
- ✅ Código mínimo e funcional
- ✅ Foco apenas em salvar/ler dados

## ⚠️ Permissões importantes:

Quando implantar, certifique-se de:
- ✅ **"Qualquer pessoa"** pode acessar
- ✅ Todas as permissões foram autorizadas
- ✅ URL foi copiada corretamente

## 🎯 Se ainda não funcionar:

1. **Verifique a URL** no `config.js`
2. **Execute testWriteSheet()** no Apps Script
3. **Veja se apareceu dados na planilha**
4. **Use o console do navegador** (F12) para ver erros

## 💡 Dica final:

O Google Apps Script às vezes demora alguns minutos para "aplicar" as mudanças. Se não funcionar imediatamente, aguarde 2-3 minutos e teste novamente.

**Agora vai funcionar!** 🚀
