import { Text, View, StyleSheet, Image } from "react-native";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import Title from "../components/UI/Title";
import Colors from "../constants/Colors";
const EndGameScreen = ({roundsNumber, setRoundsNumber, setChosenNumber, switchScreen, chosenNumber}) => {
    const restartGame = () => {
        setRoundsNumber(0);
        setChosenNumber('');
        switchScreen('startScreen');
    };

    return <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={styles.imgContainer}>
            <Image source={require('../assets/images/success.png')} style={styles.img}/>
        </View>
        <Text style={styles.stat}>Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text>
         rounds to get the number <Text style={styles.highlight}>{chosenNumber}</Text>
        </Text>
        <PrimaryBtn onPressHandler={restartGame}>Start New Game</PrimaryBtn>

    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgContainer: {
        width: 300, 
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'black',
        margin: 24
    },
    img: {
        width: '100%',
        height: '100%',
    },
    stat: {
        fontSize: 24,
        fontFamily: 'Lato',
        marginBottom: 24
    },
    highlight: {
        color: Colors.primary700,
        fontFamily: 'Lato-Bold'
    }
});

export default EndGameScreen;