import { View } from "@ant-design/react-native";
import auth from '@react-native-firebase/auth';


export const LoginScreen = ({ navigation, route }) => {
    const user = auth().currentUser;

    return (
        <View>Login</View>
    )
}