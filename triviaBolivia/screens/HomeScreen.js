import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import inicio from '../assets/inicio.png';  // Asegúrate de que la ruta sea correcta

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image blurRadius={1} source={inicio} style={styles.image} />
      <CustomButton
        title="JUGAR"
        onPress={() => navigation.navigate('Game')}
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
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
