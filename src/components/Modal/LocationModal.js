import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { blackText, blueText, color, grayText } from '../../constant'
import Header from '../Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UnderLine from '../UnderLine'
import LocationCard from '../LocationCard'

const App = ({ modalVisible, setModalVisible }) => {
  const [search, setSearch] = useState('')

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Pressable
            style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialIcons name="keyboard-arrow-down" color={color.iconDark} size={35} style={{ marginRight: 10 }} />
            <Text style={styles.bigText}>Select Location</Text>
          </Pressable>
          <View style={styles.textInput}>
            <View style={{ flexDirection: "row", width: "90%", justifyContent: "center", alignItems: "center" }}>
              <MaterialIcons name="search" color={grayText.color} size={30} style={{ marginLeft: 15 }} />
              <TextInput
                placeholder='Location'
                onChangeText={setSearch}
                value={search}
                style={{ height: 48, width: "92%", }}
              />
            </View>
            <MaterialIcons name={"cancel"} size={25} color={color.iconDark} />
          </View>
          <View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: 'row', marginTop: 20 }}>
            <MaterialIcons name={"location-on"} size={30} color={color.iconDark} style={{ marginRight: 10 }} />
            <Text style={styles.bigText}>Use my current location</Text>
          </View>
          <UnderLine marginTop={15} />
          <Text style={[styles.bigText, { marginTop: 15, textAlign: "center", color: "gray" }]}>Search Result</Text>
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appBackgrd
  },
  subContainer: {
    width: "90%",
    height: "auto",
    alignSelf: "center"
  },
  textInput: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 7,
    borderWidth: 1,
    borderColor: "#d3d2d6",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    justifyContent: "space-between"
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

export default App;