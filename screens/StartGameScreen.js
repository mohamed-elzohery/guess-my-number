import { TextInput, View, StyleSheet } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";


const StartGameScreen = () => {
    return <View style={styles.inputContainer}>
        <TextInput />
        <View>
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#72063c',
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: .25,
    }
});

export default StartGameScreen;