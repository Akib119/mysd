import { useEffect, useState } from "react";
import { ScrollView } from 'react-native';
import { View, Button, InputItem, List, Toast } from '@ant-design/react-native';


export const RegisterScreen = ({ navigation, route }) => {

    const [signupData, setSignupData] = useState({
        name: 'akku',
        email: '',
        phone: '',
        dateOfBirth: '',
        password: '',
        rePassword: ''
    });

    useEffect(() =>{
  
    }, )

    const submitData = () => {
        console.log('signupData', signupData);
        Toast.success('Load success !!!', 1)
        return signupData;
    }

    return (
        <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}>
            <List renderHeader={'Register'}>
                <InputItem
                    clear
                    error
                    value={signupData.name}
                    onChange={(value: any) => {
                        setSignupData({...signupData, name: value})
                    }}
                    extra=""
                    placeholder="Enter your name">
                    Name: 
                </InputItem>
                <InputItem
                    clear
                    error
                    value={signupData.email}
                    onChange={(value: any) => {
                        setSignupData({...signupData, email: value})
                    }}
                    extra=""
                    placeholder="Enter your email">
                    Email: 
                </InputItem>

                <Button onPress={() => submitData}> Submit </Button>
                
            </List>
            <View>{signupData.name}</View>
        </ScrollView>
        
    )
}