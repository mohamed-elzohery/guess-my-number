import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { ImageBackground } from "react-native";

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import EndGameScreen from './screens/EndGameScreen';

import LinearGradient from 'react-native-linear-gradient';
import Colors from './constants/Colors';


export default function App() {
  const [screen, setScreen] = useState('startScreen');
  const [chosenNumber, setChosenNumber] = useState('');



  const switchScreen = (screenName) => {
    setScreen(screenName);
  }

  const screens = {
    startScreen: () => <StartGameScreen switchScreen={switchScreen} setChosenNumber={setChosenNumber}/>,
    gameScreen: () => <GameScreen setChosenNumber={setChosenNumber} chosenNumber={chosenNumber} switchScreen={switchScreen}/>,
    endGameScreen: () => <EndGameScreen/>,
  }

  return <>
  <StatusBar barStyle={"light-content"} backgroundColor={Colors.primary500}/>
  <LinearGradient style={styles.root} colors={[Colors.primary500, Colors.accent500]}>
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
