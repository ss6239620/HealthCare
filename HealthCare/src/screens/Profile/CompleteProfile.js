import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CompleteProfile = () => {
    const [name, setName] = useState('')
    const [change, setChange] = useState('')
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{}}>
                <ImageBackground
                    source={require('../../assets/img/profile.jpg')}
                    resizeMode="cover"
                    style={{
                        width: '100%', // Set the width to fill the container
                        height: 180,   // Set the height according to your requirement    // Align text horizontally
                        alignItems: 'center',
                    }}
                    borderBottomLeftRadius={50}
                    borderBottomRightRadius={50}
                >
                    <View style={styles.header}>
                        <Header leftIconName header={'Profile Setup'} titleMargin={30} textColor={'#fff'} />
                        <View style={{ margin: 60, alignSelf: 'center' }}>
                            <Image source={require('../../assets/img/user.jpg')} resizeMode='cover' style={styles.image} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
            {/* Main Content */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>Name</Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder='Enter Name'
                            onChangeText={(text) => setName(text)}
                            value={name}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>Phone Number</Text>
                    <View style={[styles.textInput,]}>
                        {!change ?
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                                <Text style={{ color: 'black' }}>+91 8355817181</Text>
                                <Text
                                    onPress={() => { setChange(true) }}
                                    style={{ color: colorTheme.primaryColor }}>Change</Text>
                            </View>
                            :
                            <TextInput
                                placeholder='+91 711*******'
                                onChangeText={(text) => setName(text)}
                                value={name}
                            />
                        }
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>Email</Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder='example@gmail.com'
                            onChangeText={(text) => setName(text)}
                            value={name}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>Date of Birth (DOB)</Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder='DD/MM/YY'
                            onChangeText={(text) => setName(text)}
                            value={name}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>Gender</Text>
                    <View style={[styles.textInput, { flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center' }]}>
                        <Text>Gender</Text>
                        <MaterialIcons name={'keyboard-arrow-down'} color={colorTheme.primaryColor} size={25} style={{ padding: 5 }} />
                    </View>
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={{ backgroundColor: blueText.color, padding: 15, width: '100%', borderRadius: 50, justifyContent: "center", }}
                // onPress={() => navigation.goBack()}
                >
                    <Text style={[styles.smallText, { color: "white", alignSelf: 'center' }]}>Update Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorTheme.appBackGroundColor,
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        width: '90%',
        alignSelf: 'center',

        // marginTop: 5
    },
    content: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 80
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    bigText: {
        fontSize: blackText.fontSize,
        color: blackText.color,
        fontWeight: blackText.fontWeight
    },
    smallText: {
        fontSize: grayText.fontSize,
        color: grayText.color,
        fontWeight: grayText.fontWeight
    },
    blueText: {
        fontSize: blueText.fontSize,
        color: blueText.color,
        fontWeight: blueText.fontWeight
    },
    textInput: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 0,
        borderWidth: 1,
        borderColor: "#d3d2d6",
        // height: 200,
        textAlignVertical: 'top',
    },
    image: {
        width: 115,
        height: 130,
        borderRadius: 25,
        overflow: "hidden",

    },
});

export default CompleteProfile;
