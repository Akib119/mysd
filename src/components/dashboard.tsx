import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { List, WhiteSpace } from "@ant-design/react-native";

const Item = List.Item









const DoctorInfo = {
  name: "Hafiz"
}

const patientsInfo = [
  {
    id: 1,
    name: "AKib 1",
    age: 20,
  },
  {
    id: 2,
    name: "AKib 1",
  },
  {
    id: 3,
    name: "AKib 1",
  },
  {
    id: 4,
    name: "AKib 1",
  }
]





export const DashboardScreen = ({ navigation, route }) => {

  const [currentPatientInfo, setCurrentPatientInfo] = useState<Object | null>(null);

  const DoctorSection = ({ info }) => (
    <View
      style={{
        backgroundColor: 'red',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...info}>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>
        Hi Dr. {info.name}
      </Text>

    </View>
  )


  const PatientProfile = ({ patientProfileData }) => {
    console.log("patientProfileData", patientProfileData);
    return (
      <View>
        <Text>{patientProfileData.name}</Text>
        <Text>{patientProfileData.age}</Text>
      </View>
    )
  }


  const PatientSection = ({ data }) => {
    const setCurrentPatient = (id: any) => {

      const currentPatientInfo = patientsInfo.filter(patient => patient.id === id)[0];
      console.log("currentPatientInfo", currentPatientInfo);
      setCurrentPatientInfo(currentPatientInfo);
    }

    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: 'white', height: 600, width: 400 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>

        <List renderHeader={'Patient List'}>
          {data.map((patient: any) => (
            <Item extra="++" arrow="down" key={patient.id} onPress={() => {
              setCurrentPatient(patient.id);
            }}>
              {patient.name}
            </Item>
          ))}
        </List>
      </ScrollView>
    )
  }



  if (!currentPatientInfo) {
    return (

      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          padding: 10,
        }}
      >

        <WhiteSpace size="xl" />
        <DoctorSection info={DoctorInfo}></DoctorSection>
        <WhiteSpace size="xl" />
        <PatientSection data={patientsInfo}></PatientSection>
      </View>
    )
  } else {
    return (
      <View>
        <PatientProfile patientProfileData={currentPatientInfo}></PatientProfile>
      </View>
    )
  }








}
