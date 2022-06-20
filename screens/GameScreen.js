import { useState, useMemo, useEffect } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/UI/Card";
import InstructionsText from "../components/UI/InstructionsTxt";
import PrimaryBtn from '../components/UI/PrimaryBtn';
import Title from "../components/UI/Title";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../constants/Colors";

const getRandomGuess = (min, max, exclude) => {
    const rnd = Math.floor(Math.random() * (max - min)) + min;
    if(rnd === exclude) return getRandomGuess(min, max, exclude);
    return rnd;
}

let maxBoundary = 100;
let minBoundary = 1;
const GameScreen = ({chosenNumber, switchScreen, setChosenNumber}) => {
    const initialGuess = useMemo(() => getRandomGuess(minBoundary, maxBoundary, chosenNumber), []);

    const [guess, setGuess] = useState(initialGuess);

    const onGetTheRightNumber = () => {
        switchScreen("endGameScreen");
        setChosenNumber('');
    }

    useEffect(() => {
        if(chosenNumber === guess){
            console.log(guess)
            onGetTheRightNumber();
        }
    }, [guess, chosenNumber, onGetTheRightNumber])
    
    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && chosenNumber > guess)
        || (direction === 'higher' && chosenNumber < guess)){
            Alert.alert("Don't cheat", "You know you are liar!", [{text: "Sorry!", style: "cancel"}]);
            return;
        }

        if(direction === 'lower')maxBoundary = guess;
        if(direction === 'higher')minBoundary = guess + 1;

        const rndNumber = getRandomGuess(minBoundary, maxBoundary, guess);
        setGuess(rndNumber);
    }
    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{guess}</NumberContainer>
        <Card>
        <InstructionsText>Higher or lower?</InstructionsText>
        <View style={styles.btnsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryBtn onPressHandler={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" color={Colors.white} size={24} />
                    </PrimaryBtn>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryBtn onPressHandler={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name="md-add" color={Colors.white} size={24} />
                    </PrimaryBtn>
                </View>
            </View>
        </Card>
        </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    btnsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    btnContainer: {
        flex: 1
    }
});

export default GameScreen;