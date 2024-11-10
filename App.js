// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import MainLayout from './src/components/layout/mainlayout';
import Home from './src/app/(defaultLayout)/(forum)/page';
import Criar from './src/app/(defaultLayout)/criar/page';
import AuthenticationPage from './src/app/sign-in/page';
import Materiais from './src/app/(defaultLayout)/materiais/page';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Geist-100': require('./assets/fonts/geist-sans/geist-sans-latin-100-normal.ttf'),
    'Geist-200': require('./assets/fonts/geist-sans/geist-sans-latin-200-normal.ttf'),
    'Geist-300': require('./assets/fonts/geist-sans/geist-sans-latin-300-normal.ttf'),
    'Geist-400': require('./assets/fonts/geist-sans/geist-sans-latin-400-normal.ttf'),
    'Geist-500': require('./assets/fonts/geist-sans/geist-sans-latin-500-normal.ttf'),
    'Geist-600': require('./assets/fonts/geist-sans/geist-sans-latin-600-normal.ttf'),
    'Geist-700': require('./assets/fonts/geist-sans/geist-sans-latin-700-normal.ttf'),
    'Geist-800': require('./assets/fonts/geist-sans/geist-sans-latin-800-normal.ttf'),
    'Geist-900': require('./assets/fonts/geist-sans/geist-sans-latin-900-normal.ttf'),
    'Geist-Mono': require('./assets/fonts/geist-mono/GeistMono-Regular.ttf')
  });


  if (!fontsLoaded) {
    return null; // Aguarda o carregamento da fonte
  }

  return (
    <NavigationContainer>
      <MainLayout>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="criar" // O nome da tela deve corresponder ao valor passado no NewTopicButton
            component={Criar}
            options={{ title: 'Criar' }}
          />
          <Stack.Screen
            name="signin" // O nome da tela deve corresponder ao valor passado no NewTopicButton
            component={AuthenticationPage}
            options={{ title: 'Sign In' }}
          />
          <Stack.Screen
            name="materiais" // O nome da tela deve corresponder ao valor passado no NewTopicButton
            component={Materiais}
            options={{ title: 'Materiais' }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </MainLayout>
    </NavigationContainer>
  );
}
