import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Splash from './src/screens/Splash'
import Signup from './src/screens/Signup'
import SignIn from './src/screens/SignIn'
import Navigator from './src/screens/Navigator'
import Test from './src/screens/Test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Testlogin from './src/screens/Testlogin';
import Home from './src/screens/Home';
import Drawernavigator from './src/screens/Drawernavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SignIn />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //     name='TestRegister'
    //     component={Test}
    //     />
    //     <Stack.Screen
    //     name='Testlogin'
    //     component={Testlogin}
    //     />
    //     <Stack.Screen
    //     name='Home'
    //     component={Home}
    //     />

        
    //   </Stack.Navigator>
    // </NavigationContainer>


  )
}