import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Option from './Option'

export default function SignOptions(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>{props.text}</Text>
      <View style={styles.optionstyle}>
        <Option imagesrc={require("../assets/google.png")} />
        <Option imagesrc={require("../assets/flogo.png")} />
        <Option imagesrc={require("../assets/twitter.png")} />

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: .2,
    // backgroundColor:'gold',
    paddingTop: 12,
    width: '69%',
    marginTop: 19
  },
  optionstyle: {
    // display:'flex',
    flexDirection: 'row',
    // flex:.45,
    justifyContent: 'space-between',
    height: 48
  },
  textstyle: {
    alignSelf: 'center',
    marginBottom: "5%"
  }
})