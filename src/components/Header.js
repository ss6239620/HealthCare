import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { blackText } from '../constant'

export default function Header({ header, leftIconName, rightIconName, titleMargin, textColor, marginTop, children: Children,childrenStyle }) {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", height: 48, alignItems: 'center', marginTop: marginTop ? marginTop : 5, width: rightIconName ? "100%" : "73%", }}>
            {leftIconName
                ?
                <View style={{ width: 35, height: 35, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 50, borderWidth: 1, borderColor: "#dad9db" }}>
                    <Ionicons name={"chevron-back"} size={20} color={"#1648CE"} />
                </View>
                :
                null
            }
            {
                header ?
                    <Text style={{ fontSize: 17, fontWeight: "600", color: textColor ? textColor : blackText.color, textAlign: "center", marginRight: titleMargin }}>{header}</Text>
                    :
                    <View style={{...childrenStyle}}>
                         <Children />
                    </View>     
            }
            {rightIconName
                ?
                <View style={{ width: 35, height: 35, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 50, borderWidth: 1, borderColor: "#dad9db" }}>
                    <Ionicons name={rightIconName} size={25} color={"#1648CE"} />
                </View>
                :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    // subContainer: {
    //     // backgroundColor: "red",
    //     width: "90%",
    //     alignSelf: "center",
    //     marginTop: 10
    // }
})