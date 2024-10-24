import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from './CustomButton';
import { Modal } from 'react-native';

export default function ParticipantModal({
  visible,
  onClose,
  participants,
  newParticipant,
  setNewParticipant,
  addParticipant,
  removeParticipant,
  divideTeams,
}) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
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
          <CustomButton title="DIVIDIR EQUIPOS" onPress={divideTeams} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  participant: {
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
