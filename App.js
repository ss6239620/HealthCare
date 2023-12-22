import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './src/screens/Splash'
import AuthPage from './src/screens/AuthPage'
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import BottomTab from './src/components/BottomTab'
import DoctorDetail from './src/screens/AppointMents/DoctorDetail'
import BookAppointment from './src/screens/AppointMents/BookAppointment'
import SelectAppointmentPackage from './src/screens/AppointMents/SelectAppointmentPackage'
import PatientDetails from './src/screens/AppointMents/PatientDetails'
import PaymentMethod from './src/screens/AppointMents/PaymentMethod'
import SuccesfullPayment from './src/screens/AppointMents/SuccesfullPayment'
import Message from './src/screens/Chat/Messages'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='Auth' component={AuthPage} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name='DoctorDetail' component={DoctorDetail} options={{ headerShown: false }} />
        <Stack.Screen name='BookAppointment' component={BookAppointment} options={{ headerShown: false }} />
        <Stack.Screen name='SelectAppointmentPackage' component={SelectAppointmentPackage} options={{ headerShown: false }} />
        <Stack.Screen name='PatientDetails' component={PatientDetails} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name='SuccesfullPayment' component={SuccesfullPayment} options={{ headerShown: false }} />
        <Stack.Screen name='Message' component={Message} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})