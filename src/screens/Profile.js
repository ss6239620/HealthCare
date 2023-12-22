import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ProfileActivityCard from '../components/ProfileActivityCard'
import ProfileInfoCard from '../components/ProfileInfoCard'
import Header from '../components/Header'

export default function UserProfile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
      <Header header={"Profile"} leftIconName={"chevron-back"} rightIconName={"mail"}/>
      </View>
      <View style={[styles.subContainer, { marginTop: 20, marginBottom: 20, height: 120, backgroundColor: "white", borderRadius: 20,elevation:3 }]}>
        <View style={{ margin: 15, flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={require('../assets/img/health.jpg')} resizeMode='contain' style={{ width: 100, height: 100, borderRadius: 10 }} />
          <View style={{ width: 130 }}>
            <Text style={{ marginBottom: 10, fontWeight: "600", color: "black", fontSize: 15 }}>Liza Trass</Text>
            <View style={{ marginBottom: 5, flexDirection: 'row' }}>
              <View style={{ width: 32, height: 32, backgroundColor: "#F5FAFF", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <MaterialIcons name="date-range" size={20} color={"#1648CE"} />
              </View>
              <Text style={{ fontWeight: "500", fontSize: 13, marginLeft: 5, marginTop: 5 }}>01.01.2002</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 32, height: 32, backgroundColor: "#F5FAFF", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                <MaterialIcons name="call" size={20} color={"#1648CE"} />
              </View>
              <Text style={{ fontWeight: "500", fontSize: 13, marginLeft: 5, marginTop: 5 }}>+91 7718833236</Text>
            </View>
          </View>
          <View>
            <View style={{ width: 32, height: 32, backgroundColor: "#F5FAFF", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
              <MaterialIcons name="edit" size={25} color={"#1648CE"} />
            </View>
          </View>
        </View>
      </View>
      <ProfileActivityCard />
      <ProfileActivityCard />
      <ProfileInfoCard />
      <ProfileInfoCard />
      <ProfileInfoCard />
      <ProfileInfoCard />
      <ProfileInfoCard />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appBackgrd,
    // marginTop: 10,
  },
  subContainer: {
    // backgroundColor: "red",
    width: "90%",
    alignSelf: "center",
  }
})