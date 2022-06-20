import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { ImageBackground } from "react-native";

import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return <>
  <StatusBar barStyle={"light-content"} backgroundColor={"#4e0329"}/>
  <LinearGradient style={styles.root} colors={["#4e0329", "#ddb52f"]}>
  <ImageBackground
   resizeMode='cover'
   source={require('./assets/dices.jpg')}
   style={styles.root}
   imageStyle={styles.imgStyle}>
    <StartGameScreen />
  </ImageBackground>
  </LinearGradient>
  </>
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imgStyle: {
    opacity: .15
  }
});
