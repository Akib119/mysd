import { View, Provider, Button } from "@ant-design/react-native";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// async function onGoogleButtonPress() {
//   // Check if your device supports Google Play
//   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   // return auth().signInWithCredential(googleCredential);
//   const userCredential = await auth().signInWithCredential(googleCredential);

//   console.log('userCredential', userCredential);
// }

const onGoogleButtonPress = async () =>{
  try{
     // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

     // Create a Google credential with the token
     const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const userCredential = await auth().signInWithCredential(googleCredential);

    console.log('userCredential', userCredential);

    return userCredential;

    if(userCredential.user.emailVerified){

    }

  }catch(error){
    console.log('onGoogleButtonPress', error)
  }
 
}

export const AuthScreen = ({ navigation, route }) => {
  const user = auth().currentUser;

  // if (!user) {
  //   return <View>Please login</View>;
  // }

  // return <View>Welcome {user.email}</View>;

  return (
    <Button onPress={() => onGoogleButtonPress().then(() => {console.log('Signed in with Google!'), navigation.navigate('Login', { name: 'doctor' })})}>
      Google Sign-In
    </Button>
  )

  return (
    <View>
      <View>This is {route.params.name == 'doctor' ? 'sir' : 'nigga'}'s profile</View>;
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 500,
        }}
      >
        <View
          style={{
            textAlign: 'center'
          }}
        >Are you a</View>
        <Button onPress={() => navigation.navigate('Login', { name: 'login' })}>
          Login
        </Button>
        <View style={{
          textAlign: 'center'
        }}>Or</View>
        <Button onPress={() => navigation.navigate('Register', { name: 'register' })}>
          Register
        </Button>
      </View>

    </View>
  )
};