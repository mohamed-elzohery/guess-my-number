import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return <>
  <StatusBar backgroundColor={"#dbb52f"}/>
  <LinearGradient style={styles.root} colors={["#4e0329", "#dbb52f"]}>
    <StartGameScreen />
  </LinearGradient>
  </>
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
