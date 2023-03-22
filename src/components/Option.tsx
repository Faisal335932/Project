import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Option = props => {
  return (
    <View style={styles.imgcontainer}>
      <Image source={props.imagesrc} resizeMode="stretch" style={styles.imgstyle} />
    </View>
  )
}

export default Option

const styles = StyleSheet.create({
    imgcontainer:{
        backgroundColor:'white',
        flex:0.25,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        borderColor:'grey',
        borderWidth:.66,
    },
    imgstyle:{
      flex:0.4,
      width:22
    }
})