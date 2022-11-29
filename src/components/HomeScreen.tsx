import { Provider, View, Button, Toast } from "@ant-design/react-native";
import React from "react";

export const HomeScreen = ({ navigation }) => {
    return (
        <Provider>
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
                <Button onPress={() => navigation.navigate('Auth', { name: 'doctor' })}>
                    Doctor
                </Button>
                <View style={{
                    textAlign: 'center'
                }}>Or</View>
                <Button onPress={() => navigation.navigate('Auth', { name: 'patient' })}>
                    Patient
                </Button>
            </View>

        </Provider>
    );
};