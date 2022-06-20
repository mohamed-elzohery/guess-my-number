import {View, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const Card = ({children}) => {
    return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary800,
        marginTop: 50,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: .25,
    }
});

export default Card;