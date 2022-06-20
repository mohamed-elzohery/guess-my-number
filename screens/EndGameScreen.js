import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../components/UI/Title";
const EndGameScreen = () => {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={styles.imgContainer}>
            <Image source={require('../assets/images/success.png')} style={styles.img}/>
        </View>
        <Text>Your phone needed X times to get the number Y</Text>
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
    }
});

export default EndGameScreen;