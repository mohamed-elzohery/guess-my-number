import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const NumberContainer = ({children}) => {
    return <View style={styles.container}>
        <Text style={styles.numberTxt}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24
    },
    numberTxt: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
});

export default NumberContainer;