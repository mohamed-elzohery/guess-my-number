import { Pressable, View, Text, StyleSheet } from "react-native";


const PrimaryBtn = ({children, onPressHandler}) => {
    return  <Pressable onPress={onPressHandler}>
                <View>
                    <Text>{children}</Text>
                </View>
            </Pressable>
}

const styles = StyleSheet.create({

});

export default PrimaryBtn;