import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TriviaIndividualScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Falta programar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECE6D3',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
