import { TextInput, View, StyleSheet } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";


const StartGameScreen = () => {
    return <View style={styles.inputContainer}>
        <TextInput
        selectionColor="#dbb52f"
         maxLength={2} 
         style={styles.input} 
         keyboardType="number-pad"
         autoCapitalize="none"
         autoCorrect={false}  /> 
        <View>
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#46090f',
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: .25,
    },
    input: {
        width: 50,
        height: 50,
        fontSize: 32,
        color: '#ddb52f',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        fontWeight: 'bold',
        textAlign: "center",
        marginVertical: 8,
    }
});

export default StartGameScreen;