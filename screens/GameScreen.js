import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";
const GameScreen = () => {
    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
});

export default GameScreen;