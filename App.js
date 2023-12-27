import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './src/screens/Splash'
import GetStarted from './src/screens/Authentication/GetStarted'
import VerifyAccount from './src/screens/Authentication/VerifyAccount'
import SignUp from './src/screens/Authentication/SignUp'
import Login from './src/screens/Authentication/Login'
import BottomTab from './src/components/BottomTab'
import DoctorDetail from './src/screens/AppointMents/DoctorDetail'
import BookAppointment from './src/screens/AppointMents/BookAppointment'
import SelectAppointmentPackage from './src/screens/AppointMents/SelectAppointmentPackage'
import PatientDetails from './src/screens/AppointMents/PatientDetails'
import PaymentMethod from './src/screens/AppointMents/PaymentMethod'
import SuccesfullPayment from './src/screens/AppointMents/SuccesfullPayment'
import Message from './src/screens/Chat/Messages'
import VideoCall from './src/screens/Chat/VideoCall'
import CancelBooking from './src/screens/AppointMents/CancelBooking'
import RescheduledAppointment from './src/screens/AppointMents/ReschedledAppointment'
import EditProfile from './src/screens/Profile/EditProfile'
import Settings from './src/screens/Profile/Settings'
import PasswordManager from './src/screens/Profile/PasswordManager'
import PrivacyPolicy from './src/screens/Profile/PrivacyPolicy'
import HelpCenter from './src/screens/Profile/HelpCenter'
import SearchResult from './src/screens/Search/SearchResult'
import Hospital from './src/screens/Hospital'
import Favorites from './src/screens/Profile/Favorites'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='VerifyAccount' component={VerifyAccount} options={{ headerShown: false }} />
        <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name='DoctorDetail' component={DoctorDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Hospital' component={Hospital} options={{ headerShown: false }} />
        <Stack.Screen name='BookAppointment' component={BookAppointment} options={{ headerShown: false }} />
        <Stack.Screen name='SelectAppointmentPackage' component={SelectAppointmentPackage} options={{ headerShown: false }} />
        <Stack.Screen name='PatientDetails' component={PatientDetails} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name='SuccesfullPayment' component={SuccesfullPayment} options={{ headerShown: false }} />
        <Stack.Screen name='Message' component={Message} options={{ headerShown: false }} />
        <Stack.Screen name='VideoCall' component={VideoCall} options={{ headerShown: false }} />
        <Stack.Screen name='CancelBooking' component={CancelBooking} options={{ headerShown: false }} />
        <Stack.Screen name='RescheduledAppointment' component={RescheduledAppointment} options={{ headerShown: false }} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name='PasswordManager' component={PasswordManager} options={{ headerShown: false }} />
        <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false }} />
        <Stack.Screen name='HelpCenter' component={HelpCenter} options={{ headerShown: false }} />
        <Stack.Screen name='SearchResult' component={SearchResult} options={{ headerShown: false }} />
        <Stack.Screen name='Favorites' component={Favorites} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})