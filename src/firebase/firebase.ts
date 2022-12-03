import firebase from '@react-native-firebase/app';

// Your secondary Firebase project credentials...
const credentials = {
    apiKey: "AIzaSyABCnBvF5FBGXKjCzFII0VGMUie0Ibwu4c",
    authDomain: "mysd-9212f.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://mysd.firebaseio.com",
    projectId: "mysd-9212f",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "655512946169",
    appId: "1:655512946169:android:a9ccf69dcb54741968a928",
};

const config = {
    name: 'MYSD_APP',
};

export const initializeApp = async () => {
    console.log("initializeApp");

    if (!firebase.apps.length) {
        return await firebase.initializeApp(credentials)
    } else {
        return firebase.app();
    }
    return await firebase.initializeApp(credentials);
}

export const Firestore = async () => {
    console.log("Firestore");
    return firebase.firestore(await initializeApp());
} 