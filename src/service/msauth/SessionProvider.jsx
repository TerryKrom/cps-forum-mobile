import { useContext, createContext, useState, useEffect} from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
  exchangeCodeAsync,
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
} from 'expo-auth-session';
import { useStorageState } from './useStorageState';

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext({
  user: null,
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  return value;
}

export function SessionProvider({ children }) {
  const [user, setUser] = useState(null);
  const [[isLoading, session], setSession] = useStorageState('session');

  useEffect(() => {
    console.log("aaa")
    if (session) {
      fetch('https://graph.microsoft.com/v1.0/me', {
        headers: {
          Authorization: `Bearer ${session}`,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, [session]);

  // Endpoint
  const discovery = useAutoDiscovery(
    'https://login.microsoftonline.com/d848c1d6-0ea1-49bb-b29e-4482027ca5e1/v2.0',
  );
  const redirectUri = makeRedirectUri({
    scheme: undefined,
    path: 'auth',
  });
  const clientId = 'e271fae5-bf1c-4b06-8b1f-eb37ccf8b223';

  // Request
  const [request, , promptAsync] = useAuthRequest(
    {
      clientId,
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri,
    },
    discovery,
  );

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          promptAsync().then((codeResponse) => {
            if (request && codeResponse?.type === 'success' && discovery) {
              exchangeCodeAsync(
                {
                  clientId,
                  code: codeResponse.params.code,
                  extraParams: request.codeVerifier
                    ? { code_verifier: request.codeVerifier }
                    : undefined,
                  redirectUri,
                },
                discovery,
              ).then((res) => {
                setSession(res.accessToken);
              });
            }
          });
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
}