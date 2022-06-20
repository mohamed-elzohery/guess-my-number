import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const InstructionsText = ({children}) => {
    return <Text style={styles.insTxt}>{children}</Text>
}

const styles = StyleSheet.create({
    insTxt: {
        color: Colors.accent500,
        textAlign: 'center',
        fontSize: 32
    }
});

export default InstructionsText;