import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from 'lottie-react-native'

export default function App({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("GetStarted")
    }, 4000);
  }, [])
  
  return (
    <View style={styles.container}> 
      <LottieView
        source={require('../assets/json/doctor.json')}
        autoPlay
        loop
        style={{width:150,height:150}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#4264ad",
    justifyContent: 'center',
    alignItems: 'center'
  },
})