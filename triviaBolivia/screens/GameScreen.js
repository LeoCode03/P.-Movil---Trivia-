import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import CustomButton from '../components/CustomButton';

export default function GameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.title}>Elige un modo de juego</Text>

      <CustomButton
        title="INDIVIDUAL"
        onPress={() => navigation.navigate('Individual')}
      />

      <CustomButton
        title="GRUPAL"
        onPress={() => navigation.navigate('Grupal')}
      />
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
    marginBottom: 30,
  },
});
