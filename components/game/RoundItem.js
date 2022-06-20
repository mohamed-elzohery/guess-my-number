import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const RoundItem = ({number, id}) => {
    return <View style={styles.itemContainer}>
    <View style={styles.statContainer}>
        <View>
            <Text style={styles.listTxt}>Opponent's Guess #{id}</Text>
        </View>
        <View>
            <Text style={[styles.listTxt, styles.numberTxt]}>{number}</Text>
        </View>
    </View>
    </View>
}

const styles = StyleSheet.create({
    itemContainer:{
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: Colors.accent500,
        borderWidth: 1,
        borderColor: Colors.primary600,
        marginVertical: 8,
        borderRadius: 6,
    },
    listTxt: {
        fontSize: 16
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    numberTxt: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: Colors.primary800
    }
});

export default RoundItem;