import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Splash'
import GetStarted from '../Authentication/GetStarted'
import VerifyAccount from '../Authentication/VerifyAccount'
import SignUp from '../Authentication/SignUp'
import Login from '../Authentication/Login'
import BottomTab from '../../components/BottomTab'
import DoctorDetail from '../AppointMents/DoctorDetail'
import BookAppointment from '../AppointMents/BookAppointment'
import SelectAppointmentPackage from '../AppointMents/SelectAppointmentPackage'
import PatientDetails from '../AppointMents/PatientDetails'
import PaymentMethod from '../AppointMents/PaymentMethod'
import SuccesfullPayment from '../AppointMents/SuccesfullPayment'
import Message from '../Chat/Messages'
import VideoCall from '../Chat/VideoCall'
import CancelBooking from '../AppointMents/CancelBooking'
import RescheduledAppointment from '../AppointMents/ReschedledAppointment'
import EditProfile from '../Profile/EditProfile'
import Settings from '../Profile/Settings'
import PasswordManager from '../Profile/PasswordManager'
import PrivacyPolicy from '../Profile/PrivacyPolicy'
import HelpCenter from '../Profile/HelpCenter'
import SearchResult from '../Search/SearchResult'
import Hospital from '../Hospital'
import Favorites from '../Profile/Favorites'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
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
  )
}
