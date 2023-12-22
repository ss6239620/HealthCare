import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blackText, blueText, color, grayText } from '../constant'
import Header from '../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoctorCard from '../components/DoctorCard'

const days = ["Mon", "Tue", "Wed", "Th", "Fr", "Sat", "Sun"]
export default function Appointment() {
  const date = new Date().getDate()
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Header header={"Appointment"} leftIconName={"chevron-back"} rightIconName={"share-social-outline"} />
          <Text style={styles.smallText}>Apr 08,2022</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.bigText}>Today</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: 96, height: 30, backgroundColor: color.backgrdColor, borderRadius: 50 }}>
              <MaterialCommunityIcons name="plus-thick" color="white" size={15} />
              <Text style={[styles.smallText, { color: "white", marginLeft: 5 }]}>Add</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            {days.map((day, index) => {
              return (
                <View style={{ justifyContent: "space-evenly", alignItems: "center", height: 60, width: 41.2, backgroundColor: index === 3 ? color.iconLightBlue : "white", borderRadius: 50, marginRight: 5 }} key={index}>
                  <Text style={[index === 3 ? styles.blueText : styles.bigText, { marginTop: 5, }]}>{12 + index}</Text>
                  <Text style={[styles.smallText, { marginBottom: 10, color: index === 3 ? blueText.color : grayText.color }]}>{day}</Text>
                </View>
              )
            })}
          </View>
          <Text style={[styles.bigText, { marginTop: 15 }]}>Remainder</Text>
          <Text style={styles.smallText}>Dont forget schedule for upcoming appointment </Text>
          <View style={{marginTop:15,marginBottom:15}}>
            <DoctorCard isButtonRequired={true} />
          </View>
          <View style={{marginTop:15,marginBottom:15}}>
            <DoctorCard isButtonRequired={true} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appBackgrd
  },
  subContainer: {
    width: "90%",
    height: "auto",
    alignSelf: "center",
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
})