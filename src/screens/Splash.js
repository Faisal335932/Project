import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Navigator from './Navigator'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn')
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
      hidden={true}
      />
      <Image source={require('../assets/logo.jpg')} style={styles.imgstyle} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1D2625',
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imgstyle:{
        flex:.3,
        width:'39%'
    }
})