import { StyleSheet, Text } from "react-native";

const Title = ({children}) => {
    console.log(children);
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        padding: 12,
        borderWidth: 2,
        borderColor: '#ddb32f',
        textAlign: 'center',
        color: "#ddb32f"
    }
});
export default Title;
