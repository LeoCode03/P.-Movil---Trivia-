import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import CustomButton from '../components/CustomButton';
import ParticipantModal from '../components/ParticipantModal';
import RoundsModal from '../components/RoundsModal';
import TeamList from '../components/TeamList';

export default function GrupalScreen({ navigation }) {
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRoundsModalVisible, setIsRoundsModalVisible] = useState(false);
  const [rounds, setRounds] = useState('');
  const [teams, setTeams] = useState({ teamA: [], teamB: [] });

  const addParticipant = () => {
    if (newParticipant.trim() === '') {
      Alert.alert('Error', 'El nombre no puede estar vacío');
      return;
    }
    setParticipants([...participants, newParticipant.trim()]);
    setNewParticipant('');
  };

  const removeParticipant = (index) => {
    const updatedParticipants = [...participants];
    updatedParticipants.splice(index, 1);
    setParticipants(updatedParticipants);
  };

  const divideTeams = () => {
    if (participants.length < 2) {
      Alert.alert('Error', 'Debe haber al menos 2 participantes');
      return;
    }

    const shuffledParticipants = [...participants].sort(() => 0.5 - Math.random());
    const half = Math.ceil(shuffledParticipants.length / 2);
    const teamA = shuffledParticipants.slice(0, half);
    const teamB = shuffledParticipants.slice(half);

    setTeams({ teamA, teamB });
    setIsModalVisible(false);
  };

  const handleStartGame = () => {
    if (teams.teamA.length < 1 || teams.teamB.length < 1) {
      Alert.alert('Error', 'Debe haber al menos un participante en cada equipo');
      return;
    }
    setIsRoundsModalVisible(true);
  };

  const handleConfirmRounds = () => {
    const roundsValue = parseInt(rounds, 10);
    if (isNaN(roundsValue) || roundsValue < 1 || roundsValue > 10) {
      Alert.alert('Error', 'Por favor ingrese una cantidad de rondas válida (1-10)');
      return;
    }
    setIsRoundsModalVisible(false);
    navigation.navigate('TriviaGrupal');
  };

  return (
    <ScreenContainer title="Modo Grupal">
      <CustomButton title="AGREGAR PARTICIPANTES" onPress={() => setIsModalVisible(true)} />

      {teams.teamA.length > 0 && teams.teamB.length > 0 && (
        <TeamList teamA={teams.teamA} teamB={teams.teamB} />
      )}

      <CustomButton title="COMENZAR JUEGO" onPress={handleStartGame} />

      <ParticipantModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        participants={participants}
        newParticipant={newParticipant}
        setNewParticipant={setNewParticipant}
        addParticipant={addParticipant}
        removeParticipant={removeParticipant}
        divideTeams={divideTeams}
      />

      <RoundsModal
        visible={isRoundsModalVisible}
        onClose={() => setIsRoundsModalVisible(false)}
        rounds={rounds}
        setRounds={setRounds}
        handleConfirmRounds={handleConfirmRounds}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({});
