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
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Geist': require('./assets/fonts/geist-sans/geist-sans-latin-200-normal.ttf'), // Carrega a fonte Geist
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
        </Stack.Navigator>
        <StatusBar style="auto" />
      </MainLayout>
    </NavigationContainer>
  );
}
