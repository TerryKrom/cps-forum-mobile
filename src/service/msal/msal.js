import { msalConfig, loginRequest } from './authConfig';
import { getCurrentToken } from './tokenFetcher';
import { setInitialized } from './MyMsalProvider';
import PublicClientApplication, { EventType } from 'react-native-msal';  // Importação correta do MSAL

const pca = new PublicClientApplication(msalConfig);

async function initializeMsal() {
    try {
        // Inicializa a instância do MSAL
        await pca.init();
        console.log('MSAL Initialized Successfully');

        // Recupera todas as contas ativas
        const accounts = await pca.getAccounts();
        if (accounts.length > 0) {
            pca.setActiveAccount(accounts[0]);
        }

        // Adiciona um callback para lidar com eventos de login
        pca.addEventCallback(async (event) => {
            if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
                const payload = event.payload;
                const account = payload.account;
                pca.setActiveAccount(account);
                console.log('Login Success:', account);
            }
        });

        setInitialized(true);
    } catch (error) {
        console.error('Error initializing MSAL:', error);
    }
}

// Função para obter o token atual
export async function getToken() {
    try {
        const authToken = await getCurrentToken(pca);
        return authToken;
    } catch (error) {
        console.error('Error getting token:', error);
    }
}

// Função para fazer login (popup ou redirect)
export const handleLogin = (loginType = "redirect") => {
    const interactiveParams = {
        ...loginRequest,
        prompt: 'select_account', // Força a escolha da conta (opcional)
    };

    if (loginType === "popup") {
        pca.acquireToken(interactiveParams)  // Método para login com popup
            .then(async (response) => {
                console.log('Login Success:', response);
                const token = await getToken();
                console.log('Access Token:', token);
                // Armazene o token e as informações do usuário aqui
            })
            .catch((e) => {
                console.error(`loginPopup failed: ${e}`);
            });
    } else if (loginType === "redirect") {
        pca.acquireToken(interactiveParams)  // Método para login com redirect
            .then(async (response) => {
                console.log('Login Success:', response);
                const token = await getToken();
                console.log('Access Token:', token);
            })
            .catch((e) => {
                console.error(`loginRedirect failed: ${e}`);
            });
    }
};

// Função para fazer logout (popup ou redirect)
export const handleLogout = (logoutType = "redirect") => {
    if (logoutType === "popup") {
        pca.signOut()  // Logout utilizando popup
            .catch((e) => {
                console.error(`logoutPopup failed: ${e}`);
            });
    } else if (logoutType === "redirect") {
        const logoutRequest = {
            account: pca.getActiveAccount(),
            postLogoutRedirectUri: msalConfig.auth.redirectUri,  // Redireciona para o URI pós-logout
        };
        pca.signOut(logoutRequest)  // Logout com redirecionamento
            .catch((e) => {
                console.error(`logoutRedirect failed: ${e}`);
            });
    }
};
