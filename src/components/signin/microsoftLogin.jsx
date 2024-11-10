import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const MicrosoftLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authCode, setAuthCode] = useState(null);

  const handleLogin = () => {
    const loginUrl = 'https://login.microsoftonline.com/d848c1d6-0ea1-49bb-b29e-4482027ca5e1/oauth2/v2.0/authorize?response_type=code&client_id=e271fae5-bf1c-4b06-8b1f-eb37ccf8b223&redirect_uri=https%3A%2F%2Fwww.cpsforum.com.br%2Fapi%2Fauth%2Fcallback%2Fmicrosoft-entra-id&scope=openid+profile+email+User.Read&code_challenge=N0voTl2wU-ctDYc1vFwiVKxukLqGbLKORgSSKUfJHQs&code_challenge_method=S256';
    // Abre o login via WebView
    setAuthCode(null); // Limpa o código anterior
    setIsLoggedIn(false);
    return <WebView source={{ uri: loginUrl }} onNavigationStateChange={handleNavigationStateChange} />;
  };

  const handleNavigationStateChange = (navState) => {
    if (navState.url.includes('code=')) {
      const code = navState.url.split('code=')[1];
      setAuthCode(code);
      exchangeCodeForToken(code);
    }
  };

  const exchangeCodeForToken = async (code) => {
    try {
      // Aqui você deve fazer uma requisição para seu backend para trocar o código por um token de acesso.
      // Exemplo (usando fetch ou axios):
      const response = await fetch('https://www.cpsforum.com.br/api/auth/callback/microsoft-entra-id', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (data && data.access_token) {
        setIsLoggedIn(true);
        // Armazenar as informações na sessão ou contexto
        // Exemplo:
        // sessionStorage.setItem('user', JSON.stringify(data.user));
        console.log('Login bem-sucedido', data);
      }
    } catch (error) {
      console.error('Erro ao trocar código por token:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoggedIn ? (
        <Text>Bem-vindo ao seu painel!</Text>
      ) : (
        <>
          <Button title="Login com Microsoft" onPress={handleLogin} />
          {authCode && <Text>Código de autorização: {authCode}</Text>}
        </>
      )}
    </View>
  );
};

export default MicrosoftLogin;
