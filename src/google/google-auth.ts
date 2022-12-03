import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';

export const getCurrentUserInfo = async () => {
    try {
        const userInfo = await GoogleSignin.signInSilently();
        console.log("userInfo", userInfo);
    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            // user has not signed in yet
        } else {
            // some other error
        }
    }
};

export const signIn = async () => {
    GoogleSignin.configure({
        webClientId: '655512946169-dv36ellijd69hecs6gv3je7iv07oajln.apps.googleusercontent.com',
    });

    try {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

        // Get the users info
        const userInfo = await GoogleSignin.signIn();
        console.log("userInfo", userInfo);

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
        console.log("signIn", error)
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else {
            // some other error happened
        }
    }

}
