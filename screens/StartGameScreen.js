import { useEffect, useRef } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";


const StartGameScreen = () => {

    return <View style={styles.inputContainer}>
        <TextInput
        autoFocus={true}
         selectionColor="#dbb52f"
         maxLength={2} 
         style={styles.input} 
         keyboardType="number-pad"
         autoCapitalize="none"
         autoCorrect={false}  /> 
        <View style={styles.btnsContainer}>
            <View style={styles.btnContainer}>
                <PrimaryBtn>Confirm</PrimaryBtn>
            </View>
            <View style={styles.btnContainer}>
                <PrimaryBtn>Reset</PrimaryBtn>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b021f',
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

export default StartGameScreen;