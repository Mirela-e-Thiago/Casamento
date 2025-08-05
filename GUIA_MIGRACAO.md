# 🚀 Guia para Copiar Site para Novo Repositório

## 📋 Repositório de destino:
**https://github.com/Mirela-e-Thiago/Casamento.git**

## 🔧 Passos para migrar o site completo:

### **1. Prepare os arquivos:**
Certifique-se de que todos os arquivos estão na pasta atual:
- ✅ `index.html` (arquivo principal)
- ✅ `index.css` (estilos)
- ✅ `reset.css` (reset CSS)
- ✅ `lista-de-presenca.html` (lista de presença)
- ✅ `teste-sistema.html` (teste do sistema)
- ✅ `config.js` (configurações da API)
- ✅ `sheets-api-jsonp.js` (API sem CORS)
- ✅ `google-apps-script-jsonp.js` (script do Google)
- ✅ `teste-jsonp.html` (teste JSONP)
- ✅ `julien-fincker-spitzkant-text-medium.otf` (fonte)
- ✅ Pasta `assets/` com todas as imagens e áudio
- ✅ Arquivos de documentação (README, guias, etc.)

### **2. Execute os comandos na pasta do projeto:**

```bash
# Navegar para a pasta do projeto
cd "c:\Users\Aleph\Documents\GitHub\lp-casamento-mirela-e-thiago"

# Criar README.md
echo "# Casamento Mirela & Thiago" >> README.md

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "feat: site completo do casamento com integração Google Sheets"

# Renomear branch para main
git branch -M main

# Adicionar repositório remoto
git remote add origin https://github.com/Mirela-e-Thiago/Casamento.git

# Fazer push para o repositório
git push -u origin main
```

### **3. Estrutura que será enviada:**

```
Casamento/
├── README.md
├── index.html (site principal)
├── index.css (estilos principais)
├── reset.css (reset CSS)
├── lista-de-presenca.html (lista de convidados)
├── teste-sistema.html (teste do sistema)
├── config.js (configurações da API)
├── sheets-api-jsonp.js (API integração)
├── google-apps-script-jsonp.js (código do Google Apps Script)
├── teste-jsonp.html (teste da integração)
├── julien-fincker-spitzkant-text-medium.otf (fonte personalizada)
├── assets/
│   ├── capa.jpg (foto de capa)
│   ├── sec1.jpg (foto seção 1)
│   ├── sec4.jpg (foto seção 4)
│   ├── i1.png (ícone 1)
│   ├── i2.png (ícone 2)
│   ├── icon1.webp (ícone web 1)
│   ├── icon2.webp (ícone web 2)
│   ├── icon4.webp (ícone web 4)
│   └── musica.mp3 (música de fundo)
├── DOCS/
│   ├── README_INTEGRACAO.md
│   ├── SOLUCAO_JSONP.md
│   ├── TESTE_RESULTADOS.md
│   ├── CORS_DEFINITIVO.md
│   └── GUIA_SIMPLES.md
```

### **4. Recursos do site que serão migrados:**

#### ✅ **Funcionalidades principais:**
- 💒 Site completo do casamento
- 📝 Formulário de confirmação de presença
- 📊 Lista de presença em tempo real
- 🎁 Lista de presentes
- ⏰ Contador regressivo
- 🎵 Música de fundo
- 📱 Design responsivo

#### ✅ **Integração Google Sheets:**
- 🔗 Integração JSONP (sem problemas de CORS)
- 💾 Backup local automático
- 📈 Estatísticas em tempo real
- 📊 Exportação para Excel
- 🔄 Sincronização automática

### **5. Após o push:**

1. **Acesse**: https://github.com/Mirela-e-Thiago/Casamento
2. **Configure GitHub Pages** (se desejar):
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

3. **Seu site estará disponível em**:
   - `https://mirela-e-thiago.github.io/Casamento/`

### **6. Configurações importantes:**

#### **Google Apps Script:**
- URL já configurada no `config.js`
- Código atualizado em `google-apps-script-jsonp.js`
- Pronto para usar

#### **Planilha Google Sheets:**
- Cabeçalhos: `Nome | Crianças | Quantidade_Crianças | Data_Hora | ID`
- Integração funcionando via JSONP

### **7. Testes após migração:**

1. **Teste o site**: Acesse a URL do GitHub Pages
2. **Teste confirmação**: Preencha o formulário de presença
3. **Teste lista**: Verifique se aparece na lista de presença
4. **Teste planilha**: Confirme se dados aparecem no Google Sheets

## 🎉 Resultado final:

Você terá um repositório completo com:
- ✅ Site profissional do casamento
- ✅ Integração com Google Sheets funcionando
- ✅ Sistema de confirmação de presença
- ✅ Lista de presentes
- ✅ Documentação completa
- ✅ Hospedagem gratuita no GitHub Pages

**Execute os comandos e seu site estará no novo repositório!** 🚀
