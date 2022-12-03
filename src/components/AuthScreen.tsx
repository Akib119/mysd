import { View } from "@ant-design/react-native";
import auth from '@react-native-firebase/auth';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { signIn } from "../google/google-auth";



export const AuthScreen = ({ navigation, route }) => {
  const user = auth().currentUser;

  if (!user) {
    return (
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn().then(() => { console.log('Signed in with Google!'), navigation.navigate('Login', { name: 'doctor' }) })}
        disabled={false}
      />
    )
  }

  return <View>Welcome {user.email}</View>;

};