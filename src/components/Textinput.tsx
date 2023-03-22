import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Textinput({plc,scuretextvalue}){
  return (
    <TextInput
    placeholder={plc}
    style={styles.inputstyle}
    disableFullscreenUI={false}
    placeholderTextColor="black"
    secureTextEntry={scuretextvalue ? true : false}
    />
  )
}



const styles = StyleSheet.create({
    inputstyle:{
        borderColor:'grey',
        borderWidth:1,
        margin:"5%",
        paddingLeft:"5%",
        borderRadius:3,
        backgroundColor:"white",
        color:'black',

    },  
})