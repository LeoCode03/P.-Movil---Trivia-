import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import IndividualScreen from './screens/IndividualScreen';
import GrupalScreen from './screens/GrupalScreen';
import TriviaGrupalScreen from './screens/TriviaGrupalScreen';
import TriviaIndividualScreen from './screens/TriviaIndividualScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Definimos el header por defecto para todas las pantallas
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Individual" component={IndividualScreen} />
        <Stack.Screen name="Grupal" component={GrupalScreen} />
        <Stack.Screen name="TriviaGrupal" component={TriviaGrupalScreen} />
        <Stack.Screen name="TriviaIndividual" component={TriviaIndividualScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
