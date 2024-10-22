import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IndividualScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modo Individual</Text>
      {/* Aquí puedes agregar el contenido para el modo individual */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE6D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
