import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/screens/Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/store'


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({})