import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import CustomButton from '../components/CustomButton';
import inicio from '../assets/inicio.png';  // Asegúrate de que la ruta sea correcta

export default function HomeScreen({ navigation }) {
  return (
    <ScreenContainer title="Inicio">
      <Image source={inicio} style={styles.image} />
      <CustomButton
        title="JUGAR"
        onPress={() => navigation.navigate('Game')}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
