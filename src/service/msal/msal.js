// import { PublicClientApplication, EventType, AuthenticationResult } from 'react-native-msal';
// import { getCurrentToken } from './tokenFetcher'
// import { msalConfig, loginRequest } from './authConfig';
// import { setInitialized } from './MyMsalProvider';

// export const msalInstance = new PublicClientApplication(msalConfig);

// export async function initializeMsal() {
//   await msalInstance.initialize();  // Certifique-se de que a inicialização é compatível com o RN
//   setInitialized(true);
//   const accounts = await msalInstance.getAllAccounts();
//   if (accounts.length > 0) {
//     msalInstance.setActiveAccount(accounts[0]);
//   }

//   msalInstance.addEventCallback(async (event) => {
//     if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
//       const payload = event.payload;
//       const account = payload.account;
//       msalInstance.setActiveAccount(account);
//     }
//   });
// }

// export async function getToken() {
//   const authToken = await getCurrentToken(msalInstance);
//   return authToken;
// }

// export const handleLogin = (loginType = "redirect") => {
//   if (loginType === "popup") {
//     msalInstance.loginPopup(loginRequest).catch((e) => {
//       console.error(`loginPopup failed: ${e}`);
//     });
//   } else if (loginType === "redirect") {
//     msalInstance.loginRedirect(loginRequest).catch((e) => {
//       console.error(`loginRedirect failed: ${e}`);
//     });
//   }
// };

// export const handleLogout = (logoutType = "redirect") => {
//   if (logoutType === "popup") {
//     msalInstance.logoutPopup().catch((e) => {
//       console.error(`logoutPopup failed: ${e}`);
//     });
//   } else if (logoutType === "redirect") {
//     const logoutRequest = {
//       account: msalInstance.getActiveAccount(),
//       postLogoutRedirectUri: "/",
//     };
//     msalInstance.logoutRedirect(logoutRequest).catch((e) => {
//       console.error(`logoutRedirect failed: ${e}`);
//     });
//   }
// };
