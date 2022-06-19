import { TextInput, View } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";


const StartGameScreen = () => {
    return <View>
        <TextInput />
        <View>
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    </View>
}

export default StartGameScreen;