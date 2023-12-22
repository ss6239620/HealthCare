import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ArticleCard() {
  return (
    <View style={styles.card}>
    <View style={{ flex: 1, flexDirection: 'row', margin: 15 }}>
      <Image source={require('../assets/img/health.jpg')} style={styles.image} />
      <View
        style={{ flex: 1, flexDirection: 'column' }}
      >
        <Text style={[styles.boldText,{ flexShrink: 1,fontSize:15 }]}>Cardiology and workout?</Text>
        <Text style={[styles.grayText,{ flexShrink: 1,fontSize:12 }]}>
        Although approximately 86% of practicing cardiologists surveyed see patients who are workout ever...
        </Text>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    grayText: {
      fontSize: 17,
      fontWeight: '700',
      color: "gray"
    },
    boldText: {
      fontSize: 17,
      fontWeight: '700',
      color: "black"
    },
    smallText: {
      fontSize: 12,
      fontWeight: '500',
      color: "black"
    },
    post: {
      width: '90%',
      marginBottom: 24,
      backgroundColor: 'white',
      height: 50,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    card: {
      width: "90%",
      height: 112,
      backgroundColor: 'white',
      borderRadius:10,
      marginBottom:10,
      elevation:3
    },
    image: {
      width: '40%',
      height: '100%',
      marginRight:5
    },
  })