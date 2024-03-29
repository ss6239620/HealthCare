import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../../components/Header';
import { userServices } from '../../services/userAuth';

const App = () => {
    const [disease, setdisease] = useState('')
    const [from, setfrom] = useState('')
    const [consultion, setconsultion] = useState('')
    const [isrecovered, setisrecovered] = useState('')

    function handleSubmit(params) {
        userServices.OlddiseaseForm(disease,from,consultion,isrecovered)
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header leftIconName header={'Old Disease'} titleMargin={30} />
            </View>
            {/* Main Content */}
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>disease</Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder='AB(positive)'
                            onChangeText={(text) => setdisease(text)}
                            value={disease}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>Date</Text>
                    <View style={[styles.textInput,]}>
                    <TextInput
                                placeholder='18+'
                                onChangeText={(text) => setfrom(text)}
                                value={from}
                            />
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>consultion from</Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder='Male'
                            onChangeText={(text) => setconsultion(text)}
                            value={consultion}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.smallText, { color: 'black', marginBottom: 5 }]}>isrecovered</Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder='Male'
                            onChangeText={(text) => setisrecovered(text)}
                            value={isrecovered}
                        />
                    </View>
                </View>
            </ScrollView>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
            <TouchableOpacity
                    style={{ backgroundColor: blueText.color, padding: 15, width: '100%', borderRadius: 50, justifyContent: "center", }}
                onPress={() => handleSubmit()}
                >
                    <Text style={[styles.smallText, { color: "white", alignSelf: 'center' }]}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:colorTheme.appBackGroundColor,
        flex: 1,
        justifyContent: 'space-between',
    },
    header:{
        width:'90%',
        alignSelf:'center',
        marginTop:5
    },
    content: {
        flex: 1,
        width:'90%',
        alignSelf:'center',
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width:'90%',
        alignSelf:'center'
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
        padding: 7,
        borderWidth: 1,
        borderColor: "#d3d2d6",
        // height: 200,
        textAlignVertical: 'top',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: colorTheme.primaryColor
    },
});

export default App;
