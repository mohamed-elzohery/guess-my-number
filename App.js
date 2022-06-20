import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { ImageBackground } from "react-native";
import {useFonts} from 'expo-font';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import EndGameScreen from './screens/EndGameScreen';

import LinearGradient from 'react-native-linear-gradient';
import Colors from './constants/Colors';

let rndsNumber = 0;

export default function App() {
  const [screen, setScreen] = useState('startScreen');
  const [chosenNumber, setChosenNumber] = useState('');


  const [fontsLoaded] = useFonts({
    Lato: require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf')
  });

  if(!fontsLoaded) return null;

  const switchScreen = (screenName) => {
    setScreen(screenName);
  };

  const getRoundsNumber = (roundsNumber) => {
    rndsNumber = roundsNumber
  }

  const screens = {
    startScreen: () => <StartGameScreen 
    switchScreen={switchScreen} 
    setChosenNumber={setChosenNumber}/>,

    gameScreen: () => <GameScreen 
    getRoundsNumber={getRoundsNumber} 
    chosenNumber={chosenNumber} 
    switchScreen={switchScreen}/>,

    endGameScreen: () => <EndGameScreen 
    roundsNumber={rndsNumber} 
    setRoundsNumber={getRoundsNumber} 
    setChosenNumber={setChosenNumber}
    switchScreen={switchScreen}
    chosenNumber={chosenNumber}  />,
  }

  return <>
  <StatusBar barStyle={"light-content"} backgroundColor={Colors.primary500}/>
  <LinearGradient style={styles.root} colors={[Colors.primary500, Colors.accent500]}>
  <ImageBackground
   resizeMode='cover'
   source={require('./assets/images/dices.jpg')}
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
