import { Image, StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native'
import React,{useState} from 'react'
import Textinput from '../components/Textinput'
import Btn from '../components/Btn'
import SignOptions from '../components/SignOptions'

const Signup = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  
  const onPress = () => navigation.replace('Signup');
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor="#242121"
      />
      <Image source={require('../assets/bgcleanlogo.png')} style={styles.imgstyle} />
      <View style={styles.centercontainer}>
        <Text style={styles.textcontainer}>Login to Your Account</Text>
        <Textinput
          plc="Email"
          
        />
        <Textinput
          plc="Password"
          scuretextvalue={true}
        />
        <Btn
          text="Sign In"
        />
      </View>
      <SignOptions
        text="or Sign In with"
      />
      <View style={styles.lastcontainer}>
        <Text style={{color:"grey"}}>Don't have an Account?</Text>
        <TouchableOpacity onPress={onPress} >
          <Text style={{ color: '#1D2625', fontWeight: 'bold' }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:770,
    width:'100%',
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  imgstyle: {
    flex: .27,
    width: '33%'
  },
  centercontainer: {
    flex: .45,
    // backgroundColor:'lightblue',
    width: '79%'
  },
  textcontainer: {
    paddingTop: '5%',
    paddingLeft: '5%',
    // fontWeight: 'bold',
    fontSize: 17,
    // fontFamily:"Montserrat-ExtraBold",
    color:'grey'
  },
  lastcontainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '20%',
    flex: .1
  }
})