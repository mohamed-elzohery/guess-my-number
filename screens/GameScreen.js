import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/UI/Title";

const getRandomGuess = (min, max, exclude) => {
    const rnd = Math.floor(Math.random() * (max - min)) + min;
    if(rnd === exclude) return getRandomGuess(min, max, exclude);
    return rnd;
}
const GameScreen = ({chosenNumber}) => {
    const initialGuess = getRandomGuess(1, 100, chosenNumber);
    const [guess, setGuess] = useState(initialGuess);
    console.log(chosenNumber);
    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{guess}</NumberContainer>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
});

export default GameScreen;