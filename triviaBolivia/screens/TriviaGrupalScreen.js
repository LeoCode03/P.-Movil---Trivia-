import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

export default function TriviaGrupalScreen() {
  return (
    <ScreenContainer title="Trivia Grupal">
      <Text style={styles.text}>Falta programar</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
