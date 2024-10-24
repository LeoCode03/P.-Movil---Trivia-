import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import NumericInputModal from '../components/NumericInputModal';
import ScreenContainer from '../components/ScreenContainer';

export default function IndividualScreen({ navigation }) {
  const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);
  const [isLivesModalVisible, setIsLivesModalVisible] = useState(false);
  const [time, setTime] = useState('');
  const [lives, setLives] = useState('');

  // Reiniciar los estados cuando la pantalla esté enfocada nuevamente
  useFocusEffect(
    React.useCallback(() => {
      setIsTimeModalVisible(false);
      setIsLivesModalVisible(false);
      setTime('');
      setLives('');
    }, [])
  );

  const handleStartTimeMode = () => {
    const timeValue = parseInt(time, 10);
    if (isNaN(timeValue) || timeValue < 1 || timeValue > 5) {
      Alert.alert('Error', 'Por favor ingrese un tiempo entre 1 y 5 minutos');
      return;
    }
    navigation.navigate('TriviaIndividual');
  };

  const handleStartLivesMode = () => {
    const livesValue = parseInt(lives, 10);
    if (isNaN(livesValue) || livesValue < 1 || livesValue > 5) {
      Alert.alert('Error', 'Por favor ingrese una cantidad de vidas entre 1 y 5');
      return;
    }
    navigation.navigate('TriviaIndividual');
  };

  return (
    <ScreenContainer title="Modo Individual">
      <CustomButton
        title="CONTRA TIEMPO"
        onPress={() => setIsTimeModalVisible(true)}
      />

      <CustomButton
        title="VIDAS"
        onPress={() => setIsLivesModalVisible(true)}
      />

      {/* Modal para Contra Tiempo */}
      <NumericInputModal
        visible={isTimeModalVisible}
        onClose={() => setIsTimeModalVisible(false)}
        title="Ingrese el tiempo (1-5 minutos)"
        value={time}
        onChangeValue={setTime}
        onConfirm={handleStartTimeMode}
        placeholder="Tiempo en minutos"
      />

      {/* Modal para Vidas */}
      <NumericInputModal
        visible={isLivesModalVisible}
        onClose={() => setIsLivesModalVisible(false)}
        title="Ingrese la cantidad de vidas (1-5)"
        value={lives}
        onChangeValue={setLives}
        onConfirm={handleStartLivesMode}
        placeholder="Cantidad de vidas"
      />
    </ScreenContainer>
  );
}
