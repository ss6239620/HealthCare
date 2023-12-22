import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Appointment from '../screens/Appointment'
import Profile from '../screens/Profile'
import Search from '../screens/Search'
import Chat from '../screens/Chat/Chat';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarInactiveTintColor: '#929CAD',
                tabBarActiveTintColor: '#1648CE',
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" color={color} size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="Appointment"
                component={Appointment}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Appointment',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="plus" size={30} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat-processing-outline" color={color} size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

})