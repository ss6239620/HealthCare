import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function ProfileInfoCard() {
    return (
        <View style={[styles.subContainer, { height: 64, backgroundColor: "white", marginTop: 15, borderRadius: 20 }]}>
            <View style={{ margin: 15, flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: 32, height: 32, backgroundColor: "#F5FAFF", justifyContent: "center", alignItems: "center", borderRadius: 10, marginRight: 10 }}>
                        <MaterialIcons name="date-range" size={20} color={"#1648CE"} />
                    </View>
                    <Text style={{ alignSelf: "center", fontWeight: "500", fontSize: 15 }}>Medicine & Supplements</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <MaterialIcons name="arrow-forward-ios" size={15} color={"#1648CE"} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        // backgroundColor: "red",
        width: "90%",
        alignSelf: "center",
        elevation:2

    }
})