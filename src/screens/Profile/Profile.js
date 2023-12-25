import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorTheme, blackText, blueText, grayText } from '../../constant'
import Header from '../../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UnderLine from '../../components/UnderLine'
import { useNavigation } from '@react-navigation/native'

function InfoCard({ iconName, title, isNavigate }) {
  const navigation = useNavigation()
  return (
    <>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <MaterialCommunityIcons name={iconName} color={colorTheme.primaryColor} size={30} />
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center", width: '90%', paddingHorizontal: 10 }}>
          <Text style={styles.bigText}>{title}</Text>
          <MaterialIcons name={'arrow-forward-ios'} color={colorTheme.primaryColor} size={23} onPress={() => { isNavigate ? navigation.navigate('HelpCenter') :null }} />
        </View>
      </View>
      <UnderLine />
    </>
  )
}

const profileIcon = [
  {
    name: 'account',
    title: 'Your Profile'
  },
  {
    name: 'credit-card',
    title: 'Payment Methods'
  },
  {
    name: 'heart-outline',
    title: 'Favourite'
  },
  {
    name: 'account',
    title: 'Settings'
  },
  {
    name: 'help',
    title: 'Help Center'
  },
  {
    name: 'lock',
    title: 'Privacy Policy'
  },
  {
    name: 'logout',
    title: 'Log out'
  },
]

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.subContainer}>
        <Header leftIconName header={'Profile'} marginTop={10} titleMargin={40} />
        <View style={{ marginVertical: 30, justifyContent: 'center', alignItems: 'center', }}>
          <View>
            <Image source={require('../../assets/img/user.jpg')} resizeMode='contain' style={styles.image} />
            <View style={{ position: "absolute", bottom: 0, right: 0, backgroundColor: colorTheme.primaryColor, borderRadius: 40 }}>
              <MaterialCommunityIcons name={'pencil-plus'} color={"white"} size={25} style={{ padding: 5 }} />
            </View>
          </View>
          <Text style={[styles.bigText, { marginTop: 10 }]}>Esther Howard</Text>
        </View>
        {profileIcon.map((_, index) => (
          <InfoCard iconName={_.name} title={_.title} key={index} isNavigate />
        ))}
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
    padding: 7,
    borderWidth: 1,
    borderColor: "#d3d2d6",
    height: 200,
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
})

export { InfoCard }