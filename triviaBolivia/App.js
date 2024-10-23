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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Game" 
          component={GameScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Individual" 
          component={IndividualScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Grupal" 
          component={GrupalScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TriviaGrupal" 
          component={TriviaGrupalScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TriviaIndividual" 
          component={TriviaIndividualScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
