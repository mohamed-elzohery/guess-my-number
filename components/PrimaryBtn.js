import { Pressable, View, Text, StyleSheet } from "react-native";


const PrimaryBtn = ({children, onPressHandler}) => {
    return  <View style={styles.outerContainer}>
              <Pressable 
              style={({pressed}) =>
               (pressed ?
                 [styles.innerContainer, styles.pressed]
                 : styles.innerContainer)} 
              onPress={onPressHandler}
              android_ripple={{color: "#640233"}}>
                <Text style={styles.btnTxt}>{children}</Text>
              </Pressable>
            </View>
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#72063c',
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden'
    },
    innerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    btnTxt: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: .75
    }
});

export default PrimaryBtn;