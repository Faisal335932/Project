import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
const Register = ({ navigation }) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const Usersignin = async () => {
    if(!email || !password){
      return Alert.alert('Please enter a field')
     } 
    await auth().signInWithEmailAndPassword(email, password).then(() => {
      navigation.replace('Home')
    })
      .catch((error) => {
        Alert.alert("Oops! Something is wrong")
      })
  }
  const Createuser = async() => {
   if(!email || !password){
    return Alert.alert('Please enter a field')
    
   } 
   await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Account Created Successfully")
        // console.log('User account created & signed in!');
        navigation.replace('Home')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        Alert.alert("Oops! Something is wrong")
        // console.error(error);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.screentitle}>Register</Text>
      <TextInput
        placeholder='Email'
        placeholderTextColor={'grey'}
        style={styles.textinputstyle}
        value={email}
        onChangeText={(txt) => setemail(txt)}

      />
      <TextInput
        placeholder='Password'
        placeholderTextColor={'grey'}
        style={styles.textinputstyle}
        value={password}
        onChangeText={(txt) => setpassword(txt)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.btnstyle}
        onPress={() => Createuser()}
      >
        <Text style={styles.btntextstyle}>
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnstyle}
        onPress={() => Usersignin()}
      >
        <Text style={styles.btntextstyle}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center'
  },
  screentitle: {
    color: 'black',
    fontSize: 32,
  },
  textinputstyle: {
    backgroundColor: 'white',
    width: '90%',
    paddingLeft: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 33,
    borderRadius: 11,
    color: 'black'

  },
  btnstyle: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    height: 49,
    marginTop: 32,
    borderRadius: 11
  },
  btntextstyle: {
    color: 'black',
    fontSize: 22
  }
})