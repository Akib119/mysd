import { useEffect, useState } from "react";
import { ScrollView } from 'react-native';
import { View, Button, InputItem, List, Toast, Provider } from '@ant-design/react-native';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import { Firestore } from "../../firebase/firebase";


const appointmentsCollection = firestore().collection('appointments');

export const CreateAppointment = ({ navigation, route }) => {
    Firestore().then((res) => {
        console.log("firebase initiated");
        console.log("firebase", res)
    });

    const [createAppointmentData, setCreateAppointmentData] = useState({
        name: 'akku',
        email: '',
        phone: '',
        dateOfBirth: '',
        password: '',
        rePassword: ''
    });


    const submitData = () => {
        console.log('createAppointmentData', createAppointmentData);
        
        appointmentsCollection.doc(uuid.v4().toString()).set(createAppointmentData).then(() => {
            console.log('Appointment created!');
            Toast.success('Appointment created!', 1)
        })
        return createAppointmentData;
    }

    return (
        <Provider>
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'handled'}>
                <List renderHeader={'Register'}>
                    <View>CreateAppointment</View>
                    <InputItem
                        clear
                        error
                        value={createAppointmentData.name}
                        onChange={(value: any) => {
                            setCreateAppointmentData({ ...createAppointmentData, name: value })
                        }}
                        extra=""
                        placeholder="Enter your name">
                        Name:
                    </InputItem>
                    <InputItem
                        clear
                        error
                        value={createAppointmentData.email}
                        onChange={(value: any) => {
                            setCreateAppointmentData({ ...createAppointmentData, email: value })
                        }}
                        extra=""
                        placeholder="Enter your email">
                        Email:
                    </InputItem>

                    <Button type="primary" onPress={() => submitData()}> Submit </Button>

                </List>
                <View>{JSON.stringify(createAppointmentData)}</View>
            </ScrollView>
        </Provider>
    )
}