import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Textinput from '../components/Textinput'
import Btn from '../components/Btn'
import SignOptions from '../components/SignOptions'

const Signup = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bgcleanlogo.png')} style={styles.imgstyle} />
      <View style={styles.centercontainer}>
        <Text style={styles.textcontainer}>Create Your Account</Text>
        <Textinput
        plc="Email"
        scuretextvalue={false}
        />
        <Textinput
        plc="Password"
        scuretextvalue={true}
        />
        <Textinput
        plc="Confirm Password"
        scuretextvalue={true}
        />
        <Btn
        text="Sign In"
        />
      </View>
      <SignOptions
      text="or Sign In with"
      />
       
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:'#f8f8f8',
        alignItems:'center',
        height:777
    },
    imgstyle:{
        flex:.27,
        width:'33%'
    },
    centercontainer:{
        flex:.5,
        // backgroundColor:'lightblue',
        width:'79%'
    },
    textcontainer:{
        paddingTop:'5%',
        paddingLeft:'5%',
        fontWeight:'bold',
        fontSize:17,
        color:'grey'

    },
    lastcontainer:{
      display:'flex',
      flexDirection:'row',
      paddingTop:'20%',
      // paddingTop:-32,
      // backgroundColor:'blue',
      flex:.1
    }
})