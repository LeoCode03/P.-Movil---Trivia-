import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Asegúrate de tener @expo/vector-icons instalado
import { useNavigation } from '@react-navigation/native';  // Hook de navegación

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
});
