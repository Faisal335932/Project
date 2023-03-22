import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Btn(props){
  return (
    <TouchableOpacity style={styles.btnstyle}>
        <Text style={styles.textstyle}>{props.text}</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    btnstyle:{
        backgroundColor:'#1D2625',
        borderColor:'black',
        borderWidth:1,
        margin:"5%",
        paddingLeft:"5%",
        borderRadius:3,
        // flex:.7,
        alignItems:'center',
        justifyContent:'center',
        height:48
    },
    textstyle:{
        color:'white',
        fontSize:17,
    }
})