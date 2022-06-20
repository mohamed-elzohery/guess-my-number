import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { ImageBackground } from "react-native";

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import EndGameScreen from './screens/EndGameScreen';

import LinearGradient from 'react-native-linear-gradient';


export default function App() {
  const [screen, setScreen] = useState('startScreen');

  const switchScreen = (screenName) => {
    setScreen(screenName);
  }

  const screens = {
    startScreen: () => <StartGameScreen switchScreen={switchScreen}/>,
    gameScreen: () => <GameScreen/>,
    endGameScreen: () => <EndGameScreen/>,
  }

  return <>
  <StatusBar barStyle={"light-content"} backgroundColor={"#4e0329"}/>
  <LinearGradient style={styles.root} colors={["#4e0329", "#ddb52f"]}>
  <ImageBackground
   resizeMode='cover'
   source={require('./assets/dices.jpg')}
   style={styles.root}
   imageStyle={styles.imgStyle}>
    <SafeAreaView style={styles.root}>{screens[screen]()}</SafeAreaView>
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
