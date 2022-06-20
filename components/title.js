import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

const Title = ({children}) => {
    console.log(children);
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        padding: 12,
        borderWidth: 2,
        borderColor: Colors.accent500,
        textAlign: 'center',
        color: Colors.accent500
    }
});
export default Title;
