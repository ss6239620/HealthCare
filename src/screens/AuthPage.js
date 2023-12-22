import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { color } from '../constant/index'
import LottieView from 'lottie-react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{
          color: color.backgrdColor,
          fontSize: 20,
          fontWeight: '500',
        }}
        >
          Welcome to
        </Text>
        <Text style={{
          color: color.backgrdColor,
          fontSize: 40,
          fontWeight: '600',
        }}
        >
          Self Care</Text>
      </View>
      <View style={styles.subContainer}>
        <LottieView source={require("../assets/json/checkup.json")} style={{ width: 360, height: 500 }} autoPlay loop/>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('SignUp') }}>
          <Text style={[styles.button, { color: 'white', backgroundColor: color.backgrdColor, }]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('Login') }}>
          <Text style={[styles.button, { color: 'black', backgroundColor: 'white', }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'white'
  },
  subContainer: {
    paddingVertical: 2,
    alignItems: 'center'
  },
  button: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'center',
    paddingTop: 7,
    borderWidth: 1,
    borderColor: "thistle",
  }
});
