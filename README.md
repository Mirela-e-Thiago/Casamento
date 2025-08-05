# 💒 Casamento Mirela & Thiago
> Site completo para casamento com confirmação de presença e integração Google Sheets

## 🎯 Sobre o Projeto

Site desenvolvido para o casamento de Mirela e Thiago, com sistema completo de confirmação de presença, lista de presentes e integração com Google Sheets para gerenciamento em tempo real dos convidados.

## ✨ Funcionalidades

### 🏠 **Site Principal**
- 💒 Design elegante e responsivo
- ⏰ Contador regressivo para o grande dia
- 📍 Informações do local e horário
- 🎵 Música de fundo ambiente
- 📱 Otimizado para mobile e desktop

### 📝 **Sistema de Confirmação**
- ✅ Formulário de confirmação de presença
- 👶 Suporte para crianças acompanhantes
- 💾 Backup local automático
- 🔄 Sincronização com Google Sheets
- ⚡ Confirmação em tempo real

### 📊 **Gerenciamento de Convidados**
- 📋 Lista de presença em tempo real
- 📈 Estatísticas automáticas (adultos/crianças)
- ✏️ Edição e remoção de confirmações
- 📊 Exportação para Excel
- 🔄 Atualização automática a cada 30 segundos

### 🎁 **Lista de Presentes**
- 🏠 Categorias: Cozinha, Cama & Banho, Decoração
- 🎨 Cores de preferência para cozinha
- 📱 Interface intuitiva por categorias

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animações**: AOS (Animate On Scroll)
- **Integração**: Google Apps Script + Google Sheets
- **Exportação**: SheetJS (XLSX)
- **Método**: JSONP (sem problemas de CORS)
- **Hospedagem**: GitHub Pages

## 🚀 Como Usar

### **Para Convidados:**
1. Acesse o site
2. Clique em "Confirme sua presença"
3. Preencha o formulário
4. Confirme sua presença
5. Explore a lista de presentes

### **Para os Noivos:**
1. Acesse `/lista-de-presenca.html` para ver confirmações
2. Acompanhe estatísticas em tempo real
3. Exporte dados para Excel quando necessário
4. Visualize dados diretamente no Google Sheets

## ⚙️ Configuração

### **Google Sheets Integration:**
1. Configure o Google Apps Script com o código em `google-apps-script-jsonp.js`
2. Implante como aplicativo web
3. Configure a URL no arquivo `config.js`
4. Planilha deve ter cabeçalhos: `Nome | Crianças | Quantidade_Crianças | Data_Hora | ID`

### **Arquivos Importantes:**
- `config.js` - Configurações da API
- `sheets-api-jsonp.js` - Integração com Google Sheets
- `index.html` - Página principal
- `lista-de-presenca.html` - Lista de convidados

## 📁 Estrutura do Projeto

```
├── index.html                    # Página principal
├── lista-de-presenca.html       # Lista de confirmações
├── index.css                    # Estilos principais
├── config.js                    # Configurações da API
├── sheets-api-jsonp.js          # API de integração
├── assets/                      # Imagens e áudio
│   ├── capa.jpg
│   ├── sec1.jpg
│   ├── musica.mp3
│   └── ...
└── docs/                        # Documentação
    ├── SOLUCAO_JSONP.md
    ├── GUIA_MIGRACAO.md
    └── ...
```

## 🎨 Características do Design

- **Paleta de cores**: Tons suaves e elegantes
- **Tipografia**: Fonte personalizada Julien Fincker
- **Animações**: Transições suaves com AOS
- **Responsivo**: Adaptado para todos os dispositivos
- **Acessibilidade**: Controles de áudio e navegação clara

## 🔧 Recursos Técnicos

### **Integração Google Sheets:**
- ✅ Método JSONP para evitar problemas de CORS
- ✅ Fallback para localStorage
- ✅ Sincronização automática
- ✅ Tratamento robusto de erros

### **Performance:**
- ✅ Otimização de imagens
- ✅ Lazy loading de recursos
- ✅ Minificação de código
- ✅ Cache inteligente

## 📊 Estatísticas

O sistema automaticamente calcula:
- 👥 Total de convidados confirmados
- 👨‍👩‍👧‍👦 Número de adultos
- 👶 Número de crianças
- 📈 Estatísticas em tempo real

## 🎵 Recursos de Áudio

- 🎼 Música de fundo ambiente
- 🔇 Controle de volume pelo usuário
- 📱 Compatível com políticas de autoplay
- 🎵 Player elegante e discreto

## 📱 Responsividade

- 💻 Desktop (1200px+)
- 💻 Laptop (768px - 1199px)
- 📱 Tablet (481px - 767px)
- 📱 Mobile (até 480px)

## 🎯 Data do Casamento

**13 de Setembro de 2025 às 15h30**
📍 Minse - R. Dagoberto Inocêncio de Oliveira, S/N - Maravilha, Paty do Alferes/RJ

## 💝 Mensagem dos Noivos

*"Um amor que se torna eterno merece ser celebrado com quem amamos. Junte-se a nós!"*

---

Desenvolvido com ❤️ para Mirela & Thiago
