import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './Bananas';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Awsome Apps</Text>
      <Bananas></Bananas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
