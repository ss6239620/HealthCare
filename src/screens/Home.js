import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { color } from '../constant'
import DoctorCard from '../components/DoctorCard'
import ArticleCard from '../components/ArticleCard'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LocationModal from '../components/Modal/LocationModal'

export default function Home({ navigation }) {
  const [search, setSearch] = useState('')
  const [isPost, setIsPost] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subcontainer}>
        {modalVisible
          ?
          <LocationModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
          : null
        }
        <View style={{ width: "90%", marginBottom: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ color: "gray" }}>Location</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: 'center' }}
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons name="location-pin" color="#1648CE" size={25} />
              <Text style={{ color: "black", fontSize: 15, fontWeight: "700" }}>New York,USA</Text>
              <MaterialIcons name="keyboard-arrow-down" color="gray" size={25} />
            </Pressable>
          </View>
          <View style={{ width: 32, height: 32, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
            <MaterialIcons name="notifications-active" color="#1648CE" size={25} />
          </View>
        </View>
        <View style={{ width: '90%', marginBottom: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={styles.textInput}>
            <MaterialIcons name="search" color="#1648CE" size={25} />
            <TextInput
              placeholder='Search'
              onChangeText={(text)=>setSearch(text)}
              value={search}
              style={{ height: 48, width: "92%" }}
            />
          </View>
          <View style={{ width: 45, height: 45, backgroundColor: color.backgrdColor, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
            <FontAwesome name="sliders" color="white" size={25} />
          </View>
        </View>
        <View style={{ width: '90%', marginBottom: 24 }}>
          <Text style={[styles.grayText, { textAlign: 'left', marginBottom: 8 }]}>Nearest Visit</Text>
          <Pressable onPress={() => { navigation.navigate("DoctorDetail") }}>
            <DoctorCard />
          </Pressable>

        </View>
        <View style={styles.post}>
          <TouchableOpacity
            style={{ backgroundColor: isPost ? "#1648CE" : 'white', width: 120, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#1648CE' }}
            onPress={() => { setIsPost(true) }}
          >
            <Text style={{ color: isPost ? "white" : 'black' }}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: isPost ? "white" : "#1648CE", width: 120, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#1648CE' }}
            onPress={() => { setIsPost(false) }}
          >
            <Text style={{ color: isPost ? "black" : 'white' }}>Articles</Text>
          </TouchableOpacity>
        </View>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: color.appBackgrd
  },
  subcontainer: {
    alignItems: 'center',
    marginTop: 10,

  },
  textInput: {
    width: "80%",
    height: 48,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 7,
    borderWidth: 1,
    borderColor: "#d3d2d6",
    flexDirection: "row",
    // justifyContent:"center",
    alignItems: "center"
  },
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
    marginBottom: 3,
    // backgroundColor: 'white',
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
    borderRadius: 10
  },
  image: {
    width: '40%',
    height: '100%',
    marginRight: 5
  },
})