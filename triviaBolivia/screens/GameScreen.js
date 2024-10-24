import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import CustomButton from '../components/CustomButton';

export default function GameScreen({ navigation }) {
  return (
    <ScreenContainer title="Elige un modo de juego">
      <CustomButton
        title="INDIVIDUAL"
        onPress={() => navigation.navigate('Individual')}
      />
      <CustomButton
        title="GRUPAL"
        onPress={() => navigation.navigate('Grupal')}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE6D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
