import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import inicio from '../assets/inicio.png';  // Cambia la ruta según corresponda a la estructura de tu proyecto

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image blurRadius={1} source={inicio} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>JUGAR</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
