import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react'
import { color } from '../constant/index'
import LottieView from 'lottie-react-native';

export default function App({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView style={{}}>
                <View style={[styles.subContainer, { marginTop: 40 }]}>
                    <Text style={{
                        color: color.backgrdColor,
                        fontSize: 20,
                        fontWeight: '500',
                    }}
                    >
                        Welcome to
                    </Text>
                    <Text style={{
                        color: color.backgrdColor,
                        fontSize: 40,
                        fontWeight: '600',
                    }}
                    >
                        Login</Text>
                </View>
                <View style={styles.subContainer}>
                    <LottieView source={require("../assets/json/signup.json")} autoPlay loop style={{ width: 360, height: 350, }} />
                </View>
                <View style={[styles.subContainer,]}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='Email'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='Password'
                        secureTextEntry
                    />
                    <View style={{ position: 'absolute', bottom: -10, right: 45 }}>
                        <Text style={{}}>Forgot Password?</Text>
                    </View>
                </View>
                <View style={{ marginTop: 60, }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate("Home") }}>
                        <Text style={[styles.button, { color: 'white', backgroundColor: color.backgrdColor, }]}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <Text>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text onPress={() => { navigation.navigate("SignUp") }} style={{ color: color.backgrdColor, fontSize: 15, marginLeft: 10 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    subContainer: {
        paddingVertical: 2,
        alignItems: 'center',

    },
    button: {
        width: '80%',
        height: 40,
        marginBottom: 10,
        borderRadius: 10,
        textAlign: 'center',
        paddingTop: 7,
        borderWidth: 1,
        borderColor: "thistle",
    },
    input: {
        width: '80%',
        height: 40,
        marginBottom: 10,
        borderRadius: 10,
        padding: 7,
        borderWidth: 1,
        borderColor: "thistle",
    }
});
