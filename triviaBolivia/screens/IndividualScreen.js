import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import CustomButton from '../components/CustomButton';

export default function IndividualScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Modo Individual</Text>

      <CustomButton
        title="COMENZAR"
        onPress={() => navigation.navigate('TriviaIndividual')}
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
  },
});
