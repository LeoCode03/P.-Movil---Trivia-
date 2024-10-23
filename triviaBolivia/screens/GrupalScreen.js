import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Modal, TouchableOpacity, Alert, ScrollView } from 'react-native';
import BackButton from '../components/BackButton';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

export default function GrupalScreen({ navigation }) {
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    navigation.navigate('TriviaGrupal');
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Modo Grupal</Text>

      <CustomButton
        title="AGREGAR PARTICIPANTES"
        onPress={() => setIsModalVisible(true)}
      />

      {teams.teamA.length > 0 && teams.teamB.length > 0 && (
        <View style={styles.teamsContainer}>
          <Text style={styles.teamTitle}>Equipo A:</Text>
          {teams.teamA.map((participant, index) => (
            <Text key={index} style={styles.participant}>{participant}</Text>
          ))}
          <Text style={styles.teamTitle}>Equipo B:</Text>
          {teams.teamB.map((participant, index) => (
            <Text key={index} style={styles.participant}>{participant}</Text>
          ))}
        </View>
      )}

      <CustomButton
        title="COMENZAR JUEGO"
        onPress={handleStartGame}
      />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Añadir Participante</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del participante"
              value={newParticipant}
              onChangeText={setNewParticipant}
            />
            <TouchableOpacity style={styles.addButton} onPress={addParticipant}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
            <ScrollView style={styles.participantList}>
              {participants.map((participant, index) => (
                <View key={index} style={styles.participantItem}>
                  <Text style={styles.participant}>{participant}</Text>
                  <TouchableOpacity onPress={() => removeParticipant(index)}>
                    <Ionicons name="trash" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <CustomButton
              title="DIVIDIR EQUIPOS"
              onPress={divideTeams}
            />
          </View>
        </View>
      </Modal>
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
    marginBottom: 20,
  },
  participant: {
    fontSize: 18,
    marginVertical: 5,
  },
  teamsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  teamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  participantList: {
    width: '100%',
    maxHeight: 150,
    marginBottom: 20,
  },
  participantItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
