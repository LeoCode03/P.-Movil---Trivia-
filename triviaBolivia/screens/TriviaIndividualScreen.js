import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

export default function TriviaIndividualScreen() {
  return (
    <ScreenContainer title="Trivia Individual">
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
