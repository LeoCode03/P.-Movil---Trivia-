import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function TeamList({ teamA, teamB }) {
  return (
    <ScrollView style={styles.teamsContainer} contentContainerStyle={styles.teamsContentContainer}>
      <Text style={styles.teamTitle}>Equipo A:</Text>
      {teamA.map((participant, index) => (
        <Text key={index} style={styles.participant}>{participant}</Text>
      ))}
      <Text style={styles.teamTitle}>Equipo B:</Text>
      {teamB.map((participant, index) => (
        <Text key={index} style={styles.participant}>{participant}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  teamsContainer: {
    maxHeight: 200,
    width: '100%',
    marginTop: 20,
  },
  teamsContentContainer: {
    alignItems: 'center',
  },
  teamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  participant: {
    fontSize: 18,
    marginVertical: 5,
  },
});
