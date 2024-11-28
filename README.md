# **Projeto: Migração de Next.js para React Native**  

Este projeto tem como objetivo a migração de uma aplicação originalmente desenvolvida em **Next.js** para o ambiente **React Native**, garantindo que a experiência do usuário seja mantida e otimizada para dispositivos móveis. A aplicação permite navegação fluida, integração com serviços externos e oferece funcionalidades robustas que abrangem autenticação, consumo de APIs e gerenciamento de dados.

---

## 🚀 **Tecnologias Utilizadas**  

### **Front-End**  
- 🟢 **React Native**: Framework principal para o desenvolvimento do aplicativo.  
- 🟢 **Expo CLI**: Ferramenta para inicialização, desenvolvimento e build do projeto.  
- 🟢 **React Navigation**: Biblioteca de navegação para criar rotas, stacks e navegação fluida no aplicativo.  
- 🟢 **react-native-msal**: Integração com Microsoft Authentication Library (MSAL) para autenticação de usuários.  
- 🟢 **@react-native-picker/picker**: Componente de seleção para facilitar inputs em formulários.  

### **Back-End**  
- 🔵 **Node.js**: Ambiente de execução do JavaScript utilizado para APIs.  
- 🔵 **Express.js**: Framework utilizado para construção de rotas e gerenciamento de requisições.  
- 🔵 **Azure**: Plataforma de nuvem para deploy de APIs e gerenciamento de banco de dados.  
- 🔵 **MSAL (Microsoft Authentication Library)**: Biblioteca para autenticação com contas Microsoft.  

### **Banco de Dados**  
- 🟡 **MySQL**: Banco de dados relacional utilizado para armazenar e gerenciar os dados da aplicação, com suporte a transações e modelagem de dados.  

### **Ferramentas Adicionais**  
- 🟠 **Zod**: Biblioteca de validação e manipulação de esquemas para formulários.  
- 🟠 **React Hook Form**: Gerenciamento de formulários e validação com alta performance.  
- 🟠 **Toastify**: Exibição de notificações amigáveis para o usuário.  
- 🟠 **EAS Build**: Ferramenta de build da Expo para gerar os arquivos .apk e .ipa (Android e iOS).  

### **Testes e Qualidade**  
- ✅ **Jest**: Framework de testes automatizados.  
- ✅ **E2E Testing**: Para garantir a usabilidade do aplicativo.  

### **Documentação e Controle**  
- 📝 **Markdown**: Para criar documentações técnicas e relatórios.  
- 📝 **Git**: Controle de versão utilizado para gerenciar o código-fonte.  

---

## 🔧 **Como o Projeto é Feito**  

1. **Adaptação de Componentes e Layouts**  
   O projeto foi iniciado pela transferência de componentes e layouts do ambiente web (Next.js) para React Native. Isso incluiu:  
   - Ajustes nos estilos para compatibilidade com o ambiente mobile.  
   - Substituição de bibliotecas específicas do Next.js por alternativas para React Native (por exemplo, substituindo o `next/router` por `React Navigation`).  

2. **Criação do Back-End**  
   - APIs desenvolvidas em **Node.js** e **Express.js**.  
   - Integração com **MySQL** para armazenamento de dados.  
   - Deploy realizado na **plataforma Azure** para garantir escalabilidade e segurança.  

3. **Autenticação**  
   - Implementação da biblioteca `react-native-msal` para autenticação via contas Microsoft, mantendo a segurança e o fluxo de login do projeto original.  

4. **Gerenciamento de Estados e Formulários**  
   - Utilização de `React Hook Form` para gestão de formulários.  
   - Validações eficientes com `Zod`, oferecendo mensagens de erro claras e consistentes.  

5. **Build e Deploy**  
   - Utilização do **EAS Build** para gerar os arquivos .apk (Android) e .ipa (iOS), prontos para publicação nas respectivas lojas.  

---

## 📚 **Estrutura do Projeto**  

```plaintext
/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── screens/          # Telas do aplicativo
│   ├── services/         # Integrações com APIs
│   ├── navigation/       # Configuração de rotas
│   ├── styles/           # Arquivos de estilização global
│   └── utils/            # Funções auxiliares
├── eas.json              # Configuração para build no EAS
├── package.json          # Dependências do projeto
├── README.md             # Documentação do projeto
└── App.js                # Arquivo principal do aplicativo
```

---

## 🛠️ **Como Rodar o Projeto**  

### **Pré-requisitos**  
- Node.js instalado na máquina.  
- Expo CLI instalado globalmente:  
  ```bash
  npm install -g expo-cli
  ```  
- Conta configurada no Expo e no EAS Build.  

### **Passos**  

1. **Clonar o Repositório**  
   ```bash
   git clone https://github.com/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instalar Dependências**  
   ```bash
   npm install
   ```

3. **Iniciar o Projeto**  
   ```bash
   expo start
   ```

4. **Build do APK ou IPA**  
   Configure o arquivo `eas.json` e execute:  
   ```bash
   eas build
   ```

---

## 👨‍💻 **Contribuidores**  

- **Guilherme Avila**  
  Desenvolvedor do front-end e responsável pela adaptação para React Native.  

- **Nicholas Cardoso**  
  Produtor das APIs, banco de dados MySQL e integrações com MSAL e Azure.  

- **Ryan Henrique**  
  QA oficial e colaborador na documentação técnica.  

- **Nicolly Vitória**  
  Responsável pela documentação de entrega e textos explicativos.  

---

## 🌟 **Conclusão**  

A migração de Next.js para React Native foi um sucesso, permitindo que o projeto evoluísse para um ambiente mobile nativo. Com a colaboração de uma equipe dedicada, garantimos uma aplicação robusta, funcional e bem documentada.  

--- 

Se precisar de mais ajustes ou complementos, é só avisar! 😊
