import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Lato',
        fontSize: 30,
        padding: 12,
        borderWidth: 2,
        borderColor: Colors.white,
        textAlign: 'center',
        color: Colors.white
    }
});
export default Title;
