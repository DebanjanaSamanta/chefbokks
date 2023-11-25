
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Welcomescreen from './screens/Welcomescreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ReadRecipe from './screens/ReadRecipe';
import BottomTabNavigator from './navigator/bottomnavigator';



import  firebase from "firebase";
import {firebaseConfig} from './config';

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    // <NavigationContainer>
       <Stack.Navigator initialRouteName="Dashboard" screenOptions={{
        headerShown:false,
        gestureEnabled:false,
       }}>
         <Stack.Screen
         name="Welcomescreen"
           component={Welcomescreen}
    //       options={{ headerShown: false }}
         />
         <Stack.Screen
           name="Login"
          component={Login}
        //   options={{ headerShown: false }}
         />
         <Stack.Screen
           name="SignUp"
           component={SignUp}
    //      options={{ headerShown: false }}
         />

         <Stack.Screen
          name="Explore"
           component={BottomTabNavigator}
    //       options={{ headerShown: false }}
         />
          <Stack.Screen
           name="Read"
           component={ReadRecipe}
    //       options={{ headerShown: false }}
         />
       </Stack.Navigator>
    // </NavigationContainer>
    //<Login/>
  );
};

export default function App(){
  return (
    <NavigationContainer> 
      <StackNav/>
    </NavigationContainer>
  )
}
