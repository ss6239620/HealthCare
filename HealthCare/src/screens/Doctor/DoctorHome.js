import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colorTheme, blackText, blueText, grayText } from '../../constant'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { navigate } from '../../services/navRef'


const bubbleButton = [
    [
        {
            color: '#7166F9',
            name: 'Chat',
            icon: 'wechat',
        },
        {
            color: '#FF7854',
            name: 'Blogs',
            icon: 'edit-note'
        },
    ],
    [
        {
            color: '#FEA725',
            name: 'Ratings',
            icon: 'star-rate'
        },
        {
            color: '#68EEBE',
            name: 'Medicine',
            icon: 'medical-services'
        },
    ],

]

const days = ["Mon", "Tue", "Wed", "Th", "Fr", "Sat", "Sun"]


const ApointmentCard = () => {
    return (
        <View style={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginVertical: 10,
            elevation: 3,
            width: '98%',
            alignSelf: 'center'
        }}>
            <View style={{ flex: 1, flexDirection: 'row', margin: 15 }}>
                <Image source={require('../../assets/img/health.jpg')} style={{
                    width: '40%',
                    height: '100%',
                    marginRight: 5,
                    borderRadius: 10
                }} />
                <View
                    style={{ flex: 1, flexDirection: 'column' }}
                >
                    <Text numberOfLines={2} style={[styles.boldText, { flexShrink: 1, fontSize: 15, fontWeight: '700' }]}>Sharvesh SIngh</Text>
                    <Text numberOfLines={3} style={[styles.grayText, { flexShrink: 1, fontSize: 12 }]}>
                        Columbia Asia Hospital
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.smallText,]}>Time</Text>
                        <Text style={[styles.smallText,]}>06:00 PM</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const Bubble = ({ data }) => {
    return (
        <TouchableOpacity 
        onPress={()=>{navigate('Blogs')}}
        style={{ marginTop: 20, width: "48%", height: 140, backgroundColor: data.color, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
                <MaterialIcons name={data.icon} color={colorTheme.primaryColor} size={40} style={{ padding: 6, }} />
            </View>
            <Text style={[styles.bigText, { color: '#fff', fontWeight: '100' }]}>{data.name}</Text>
        </TouchableOpacity>
    )
}
export default function DoctorHome() {
    const navigate=useNavigation()
    const [search, setsearch] = useState('')
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.subContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MaterialIcons name='notifications-active' size={30} color={colorTheme.iconWithBlueBackGround} />
                    <Image source={require('../../assets/img/Doctor.jpg')} style={styles.image} />
                </View>
                <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.bigText, { fontSize: 30, fontWeight: 'bold' }]}>Find </Text>
                    <Text style={[styles.bigText, { fontSize: 25, fontWeight: '500', color: '#A0A4A8' }]}>Your appointments </Text>
                </View>
                <View style={styles.textInput}>
                    <MaterialIcons name="search" color={colorTheme.primaryColor} size={25} />
                    <TextInput
                        placeholder='Search appointments..'
                        onChangeText={(text) => setsearch(text)}
                        value={search}
                        style={{ height: 48, width: "92%" }}
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",marginTop:20 }}>
                    <Text style={styles.bigText}>Today</Text>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: 96, height: 30, backgroundColor: colorTheme.primaryColor, borderRadius: 50 }}>
                        <MaterialCommunityIcons name="plus-thick" color="white" size={15} />
                        <Text style={[styles.smallText, { color: "white", marginLeft: 5 }]}>Add</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    {days.map((day, index) => {
                        return (
                            <View style={{ justifyContent: "space-evenly", alignItems: "center", height: 60, width: 41.2, backgroundColor: index === 3 ? colorTheme.iconBackGroundColor : "white", borderRadius: 50, marginRight: 5 }} key={index}>
                                <Text style={[index === 3 ? styles.blueText : styles.bigText, { marginTop: 5, }]}>{12 + index}</Text>
                                <Text style={[styles.smallText, { marginBottom: 10, color: index === 3 ? blueText.color : grayText.color }]}>{day}</Text>
                            </View>
                        )
                    })}
                </View>
                {bubbleButton.map((row, index) => (
                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {row.map((item, i) => (
                            <Bubble key={i} data={item} />
                        ))}
                    </View>
                ))}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.bigText, { marginTop: 10, }]}>Today's Appointments</Text>
                    <Text style={[styles.smallText, { marginTop: 10, textDecorationLine: 'underline', color: colorTheme.primaryColor }]}>See More</Text>
                </View>
                <ApointmentCard />
                <ApointmentCard />
                <ApointmentCard />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorTheme.appBackGroundColor
    },
    subContainer: {
        width: "90%",
        height: "auto",
        alignSelf: "center",
        marginVertical: 20,
        // backgroundColor:"red"
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
        padding: 5,
        borderWidth: 1,
        borderColor: "#d3d2d6",
        // height: 200,
        textAlignVertical: 'top',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 0.2,
        borderColor: "red"
    },
})