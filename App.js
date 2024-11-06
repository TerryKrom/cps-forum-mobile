// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MainLayout from './src/components/layout/mainlayout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/app/(defaultLayout)/(forum)/page';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainLayout>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ title: 'Home' }} // Título na barra de navegação
          />
          {/* Você pode adicionar outras telas aqui */}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </MainLayout>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
