import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from './BackButton';

export default function ScreenContainer({ title, children }) {
  return (
    <View style={styles.container}>
      <BackButton />
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
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
    position: 'absolute',
    top: 50,
  },
});
