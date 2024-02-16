import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colorTheme } from '../../constant'
import DoctorCard from '../../components/DoctorCard'
import ArticleCard from '../../components/ArticleCard'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LocationModal from '../../components/Modal/LocationModal'
import FilterModal from '../../components/Modal/FilterModal'
import NotificationModal from '../../components/Modal/NotificationModal'
import Carousel from '../../components/Carousel'
import Category from '../../components/Modal/CategoryModal'
import TopDoctorModal from '../../components/Modal/TopDoctorModal'
import TopHospitalModal from '../../components/Modal/TopHospitalModal'
import HospitalProfileCard from '../../components/HospitalProfileCard'
import { articlesServices } from '../../services/Article'

const data = [
  {
    name: 'Dr. Charollette Baker',
    job: "Heart Surgeon",
  },
  {
    name: 'Dr. Gautam Verma',
    job: "Heart Surgeon",
  },
  {
    name: 'Dr. Gautam Verma',
    job: "Heart Surgeon",
  },
];

function Test(params) {
  return (
    <Text>Hello</Text>
  )
}


export default function Home({ navigation }) {
  const [article, setarticle] = useState({})
  const [articleLoading, setarticleLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [isPost, setIsPost] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModal, setFilterModal] = useState(false)
  const [notificationModal, setNotificationModal] = useState(false)
  const [categoryModalVisible, setcategoryModalVisible] = useState(false);
  const [topDoctorModal, setTopDoctorModal] = useState(false);
  const [topHosPitalModal, setTopHospitalModal] = useState(false);

  useEffect(() => {
    articlesServices.FetchArticles().then((
      res => {
        setarticle(res.data.articles)
        setarticleLoading(true)
      }
    )).catch(err => { console.log('error fetching data'); })
  }, [])


  // articlesServices.FetchArticles()

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.subcontainer}>
        <>
          {modalVisible
            ?
            <LocationModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            : null
          }
          {notificationModal
            ?
            <NotificationModal modalVisible={notificationModal} setModalVisible={setNotificationModal} />
            : null
          }
          {
            filterModal
              ?
              <FilterModal modalVisible={filterModal} setModalVisible={setFilterModal} />
              : null
          }
          {
            categoryModalVisible
              ?
              <Category modalVisible={categoryModalVisible} setModalVisible={setcategoryModalVisible} />
              : null
          }
          {
            topDoctorModal
              ?
              <TopDoctorModal modalVisible={topDoctorModal} setModalVisible={setTopDoctorModal} />
              : null
          }
          {
            topHosPitalModal
              ?
              <TopHospitalModal modalVisible={topHosPitalModal} setModalVisible={setTopHospitalModal} />
              : null
          }
        </>
        <View style={{ width: "90%", marginBottom: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ color: "gray" }}>Location</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: 'center' }}
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons name="location-pin" color={colorTheme.primaryColor} size={25} />
              <Text style={{ color: "black", fontSize: 15, fontWeight: "700" }}>New York,USA</Text>
              <MaterialIcons name="keyboard-arrow-down" color={colorTheme.primaryColor} size={25} />
            </Pressable>
          </View>
          <Pressable
            onPress={() => setNotificationModal(true)}
            style={{ width: 32, height: 32, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
            <MaterialIcons name="notifications-active" color={colorTheme.primaryColor} size={25} />
          </Pressable>
        </View>
        <View style={{ width: '90%', marginBottom: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={styles.textInput}>
            <MaterialIcons name="search" color={colorTheme.primaryColor} size={25} />
            <TextInput
              placeholder='Search'
              onChangeText={(text) => setSearch(text)}
              value={search}
              style={{ height: 48, width: "92%" }}
            />
          </View>
          <Pressable
            style={{ width: 45, height: 45, backgroundColor: colorTheme.primaryColor, justifyContent: "center", alignItems: "center", borderRadius: 10 }}
            onPress={() => { setFilterModal(true) }}
          >
            <FontAwesome name="sliders" color="white" size={25} />
          </Pressable>
        </View>
        <View style={{ width: '90%', flexDirection: "row", justifyContent: 'space-between' }}>
          <Text style={[styles.grayText, { marginBottom: 8, }]}>Top Specialist</Text>
          <Text
            onPress={() => { setTopDoctorModal(true) }}
            style={[{ color: colorTheme.primaryColor, fontSize: 15 }]}>See All</Text>
        </View>
        <Carousel data={data}>
          <DoctorCard isNavigate />
        </Carousel>

        <View style={{}}>
          <View style={{ width: '90%', flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
            <Text style={[styles.grayText, { marginBottom: 8, }]}>Doctor Speciality</Text>
            <Text onPress={() => { setcategoryModalVisible(true) }} style={[{ color: colorTheme.primaryColor, fontSize: 15 }]}>See All</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>
            <View style={{ backgroundColor: colorTheme.iconBackGroundColor, padding: 15, borderRadius: 50 }}>
              <FontAwesome5 name="teeth-open" color={colorTheme.primaryColor} size={25} />
            </View>
            <View style={{ backgroundColor: colorTheme.iconBackGroundColor, padding: 15, borderRadius: 50 }}>
              <FontAwesome5 name="heartbeat" color={colorTheme.primaryColor} size={25} />
            </View>
            <View style={{ backgroundColor: colorTheme.iconBackGroundColor, padding: 15, borderRadius: 50 }}>
              <FontAwesome5 name="bone" color={colorTheme.primaryColor} size={25} />
            </View>
            <View style={{ backgroundColor: colorTheme.iconBackGroundColor, padding: 15, borderRadius: 50 }}>
              <FontAwesome5 name="brain" color={colorTheme.primaryColor} size={25} />
            </View>
          </View>
        </View>
        <View>
          <View style={{ width: '90%', flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
            <Text style={[styles.grayText, { marginBottom: 8, }]}>Top Hospitals</Text>
            <Text onPress={() => { setTopHospitalModal(true) }} style={[{ color: colorTheme.primaryColor, fontSize: 15 }]}>See All</Text>
          </View>
        </View>
        <Carousel data={data}>
          <HospitalProfileCard isNavigate />
        </Carousel>
        <View style={[{ width: "90%", }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={{ backgroundColor: isPost ? colorTheme.primaryColor : 'white', width: 120, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colorTheme.primaryColor }}
              onPress={() => { setIsPost(true) }}
            >
              <Text style={{ color: isPost ? "white" : 'black' }}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: isPost ? "white" : colorTheme.primaryColor, width: 120, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colorTheme.primaryColor }}
              onPress={() => { setIsPost(false) }}
            >
              <Text style={{ color: isPost ? "black" : 'white' }}>Articles</Text>
            </TouchableOpacity>
          </View>
          {articleLoading ? article.map((obj, index) => (
            <ArticleCard key={index} title={obj.title} desc={obj.description} image={obj.urlToImage}/>
          )) :
            <Text>Loading...</Text>}
        </View>
      </ScrollView >
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colorTheme.appBackGroundColor
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
    borderColor: colorTheme.borderColor,
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