// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import MainLayout from './src/components/layout/mainlayout';
import Home from './src/app/(defaultLayout)/(forum)/page';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Geist': require('./assets/fonts/geist-sans-latin-200-normal.ttf'), // Carregue a fonte Geist
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
          {/* Você pode adicionar outras telas aqui */}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </MainLayout>
    </NavigationContainer>
  );
}

