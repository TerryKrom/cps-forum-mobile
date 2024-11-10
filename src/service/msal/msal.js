// import { msalConfig, loginRequest } from './authConfig';
// import { getCurrentToken } from './tokenFetcher';
// import { setInitialized } from './MyMsalProvider';

// const msal = require('react-native-msal').default;
// // Criação da instância do PublicClientApplication
// const pca = new msal.PublicClientApplication(msalConfig);

// async function initializeMsal() {
//   try {
//     // Inicializa a instância do MSAL
//     await pca.init();
//     console.log('MSAL Initialized Successfully');

//     // Recupera todas as contas ativas
//     const accounts = await pca.getAccounts();
//     if (accounts.length > 0) {
//       pca.setActiveAccount(accounts[0]);
//     }

//     // Adiciona um callback para lidar com eventos de login
//     pca.addEventCallback(async (event) => {
//       if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
//         const payload = event.payload;
//         const account = payload.account;
//         pca.setActiveAccount(account);
//       }
//     });

//     setInitialized(true);
//   } catch (error) {
//     console.error('Error initializing MSAL:', error);
//   }
// }

// export async function getToken() {
//   try {
//     const authToken = await getCurrentToken(pca);
//     return authToken;
//   } catch (error) {
//     console.error('Error getting token:', error);
//   }
// }

// // Função para fazer login (popup ou redirect)
// export const handleLogin = (loginType = "redirect") => {
//   if (loginType === "popup") {
//     pca.loginPopup(loginRequest).catch((e) => {
//       console.error(`loginPopup failed: ${e}`);
//     });
//   } else if (loginType === "redirect") {
//     pca.loginRedirect(loginRequest).catch((e) => {
//       console.error(`loginRedirect failed: ${e}`);
//     });
//   }
// };

// // Função para fazer logout (popup ou redirect)
// export const handleLogout = (logoutType = "redirect") => {
//   if (logoutType === "popup") {
//     pca.logoutPopup().catch((e) => {
//       console.error(`logoutPopup failed: ${e}`);
//     });
//   } else if (logoutType === "redirect") {
//     const logoutRequest = {
//       account: pca.getActiveAccount(),
//       postLogoutRedirectUri: "/",
//     };
//     pca.logoutRedirect(logoutRequest).catch((e) => {
//       console.error(`logoutRedirect failed: ${e}`);
//     });
//   }
// };
