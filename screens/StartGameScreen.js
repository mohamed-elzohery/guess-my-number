import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import Colors from "../constants/Colors";


const StartGameScreen = ({switchScreen, setChosenNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const onChangeHandler = (enteredValue) => {
        setEnteredNumber(enteredValue);
    }

    const onConfirmHandler = () => {
        const enteredVal = parseInt(enteredNumber);

        if(isNaN(enteredVal) || enteredVal < 1 || enteredVal > 100){
            Alert.alert('Invalid Number',
             "Enter number between 1 ~ 99.",
              [{style: 'destructive', text: 'Okay', onPress: onResetHandler}]);
              return;
        }

        switchScreen('gameScreen');
        setChosenNumber(enteredVal);
    }

    const onResetHandler = () => {
        setEnteredNumber('');
    }

    return <View style={styles.inputContainer}>
        <TextInput
        value={enteredNumber}
        onChangeText={onChangeHandler}
        autoFocus={true}
         selectionColor={Colors.accent500}
         maxLength={2} 
         style={styles.input} 
         keyboardType="number-pad"
         autoCapitalize="none"
         autoCorrect={false}  /> 
        <View style={styles.btnsContainer}>
            <View style={styles.btnContainer}>
                <PrimaryBtn onPressHandler={onConfirmHandler}>Confirm</PrimaryBtn>
            </View>
            <View style={styles.btnContainer}>
                <PrimaryBtn onPressHandler={onResetHandler}>Reset</PrimaryBtn>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary800,
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
        color: Colors.accent500,
        borderBottomColor: Colors.accent500,
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