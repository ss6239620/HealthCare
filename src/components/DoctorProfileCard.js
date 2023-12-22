import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { blackText, blueText, color, grayText } from '../constant'

export default function DoctorProfileCard() {
    const [like, setLike] = useState(false)
    return (
        <View style={[styles.subContainer, { elevation: 2, borderRadius: 20 }]}>
            <View style={{ margin: 15, flexDirection: "row", height: 100, justifyContent: 'center', alignItems: "center", }}>
                <Image source={require('../assets/img/health.jpg')} resizeMode='contain' style={styles.image} />
                <View style={{ width: "60%", marginLeft: 16, height: 100 }}>
                    <Text style={styles.bigText}>Dr. Jonny Wilson</Text>
                    <Text style={[styles.smallText, { marginTop: 1 }]}>DenTist</Text>
                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 5 }}>
                        <MaterialIcons name="location-pin" color="#1648CE" size={25} />
                        <Text style={styles.smallText}>New York,USA</Text>
                    </View>
                    <Pressable style={{ marginTop: 5, alignSelf: 'flex-end', }} onPress={() => { like ? setLike(false) : setLike(true) }}>
                        <MaterialCommunityIcons name={like ? "heart" : "heart-outline"} color={like ? "red" : "#5a585e"} size={30} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "white",
        marginTop: 20
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "red"
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
})