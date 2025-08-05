# 📋 Integração Lista de Presença com Google Sheets

## ✅ Status da Configuração
- ✅ Google Apps Script configurado
- ✅ URL da API configurada
- ✅ Arquivos atualizados
- ✅ Sistema pronto para uso!

## 🚀 Como funciona agora

### 1. **Fluxo de dados**
```
Usuário preenche formulário → Dados vão para Google Sheets → Site puxa dados da planilha
```

### 2. **Recursos implementados**
- ✅ Envio automático para planilha quando usuário confirma presença
- ✅ Carregamento automático dos dados da planilha na lista
- ✅ Backup local (localStorage) como fallback
- ✅ Sincronização automática a cada 30 segundos
- ✅ Indicadores de carregamento
- ✅ Tratamento de erros
- ✅ Exportação para Excel continua funcionando

## 📊 Sua Planilha Google Sheets

### Estrutura da planilha:
| Nome | Crianças | Quantidade_Crianças | Data_Hora | ID |
|------|----------|--------------------|-----------|----|
| João Silva | Maria, 5 anos | 1 | 04/08/2025 14:30:00 | 1722789000000 |

### Como acessar:
1. Abra sua planilha no Google Sheets
2. Todos os dados das confirmações aparecerão automaticamente
3. Você pode editar diretamente na planilha se necessário

## 🔧 Arquivos modificados

### Novos arquivos criados:
- `config.js` - Configurações da API
- `sheets-api.js` - Funções de integração
- `README_INTEGRACAO.md` - Este arquivo

### Arquivos atualizados:
- `index.html` - Formulário principal integrado
- `lista-de-presenca.html` - Lista integrada com planilha

## 🎯 Funcionalidades

### Para os convidados:
1. Preenchem o formulário normalmente
2. Dados são salvos automaticamente na planilha
3. Recebem confirmação de sucesso
4. Em caso de erro, dados ficam salvos localmente

### Para você (administrador):
1. **Visualizar em tempo real**: Acesse `seu-site.com/lista-de-presenca.html`
2. **Google Sheets**: Veja todos os dados na planilha
3. **Exportar Excel**: Continue usando o botão de exportar
4. **Editar/Remover**: Funciona normalmente na interface

## 🔄 Sincronização

### Automática:
- ✅ Dados sincronizam a cada 30 segundos
- ✅ Carregamento automático ao acessar a lista
- ✅ Fallback para dados locais se houver erro

### Manual:
- Recarregue a página da lista de presença
- Os dados mais recentes aparecerão

## 🛠️ Resolução de Problemas

### Se algo não funcionar:

1. **Verifique a URL**: Confirme se a URL no `config.js` está correta
2. **Teste a planilha**: Acesse a URL diretamente no navegador
3. **Console do navegador**: Pressione F12 e veja se há erros
4. **Fallback**: O sistema ainda salva localmente se a planilha falhar

### URLs importantes:
- **Planilha**: Sua planilha no Google Sheets
- **Script**: https://script.google.com/macros/s/AKfycbzwxV6t62SMpfNelxCbn0AV1sR2pZRVAtbhIgrMc6uE5E18A9VxbeSJvsjWT8Uwcw/exec
- **Lista**: `seu-site.com/lista-de-presenca.html`

## 📱 Compatibilidade
- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Android Chrome)
- ✅ Tablets
- ✅ Funciona offline (com localStorage)

## 🎉 Próximos passos

1. **Teste o sistema**:
   - Acesse seu site
   - Preencha o formulário
   - Verifique se aparece na planilha
   - Confira a lista de presença

2. **Monitore**:
   - Acompanhe as confirmações na planilha
   - Use a interface web para gerenciar
   - Exporte para Excel quando necessário

3. **Compartilhe**:
   - Seu convite está pronto!
   - Os convidados podem confirmar presença normalmente
   - Tudo será salvo automaticamente

## ⚡ Vantagens desta solução

- **Gratuita**: Usa Google Sheets gratuito
- **Confiável**: Backup local + planilha online
- **Tempo real**: Dados aparecem imediatamente
- **Fácil de usar**: Interface familiar do Google Sheets
- **Exportável**: Pode baixar Excel a qualquer momento
- **Sem servidor**: Não precisa de hosting especial

Agora sua lista de presença está totalmente integrada com Google Sheets! 🎊
