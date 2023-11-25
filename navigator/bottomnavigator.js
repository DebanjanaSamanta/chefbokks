import React, { useEffect, useRef } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

// Import your screens (Home, Create, and Bookmarks)
import Home from '../screens/Home';
import CreateRecipeScreen from '../screens/CreateRecipie';
import Bookmarks from '../screens/Bookmarks';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const CustomTabButton = ({ route, focused, onPress }) => {
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    const animate1 = { 0: { scale: 0.5, translateY: 7 }, 0.92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } };
    const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } };

    const circle1 = { 0: { scale: 0 }, 0.3: { scale: 0.9 }, 0.5: { scale: 0.2 }, 0.8: { scale: 0.7 }, 1: { scale: 1 } };
    const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1);
        circleRef.current.animate(circle1);
       // textRef.current.transitionTo({ scale: 1 });
       
      } else {
        viewRef.current.animate(animate2);
        circleRef.current.animate(circle2);
       // textRef.current.transitionTo({ scale: 0 });
      }
    }, [focused]);

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
        <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
          <View style={styles.btn}>
            <Animatable.View ref={circleRef} style={styles.circle} />
            <MaterialCommunityIcons
              name={
                route.name === 'Home'
                  ? 'home'
                  : route.name === 'Create'
                  ? 'plus-circle'
                  : route.name === 'Bookmarks'
                  ? 'heart'
                  : 'user-circle-o'
              }
              size={focused ? RFValue(24) : RFValue(20)}
              color={focused ? '#FFFFFF' : '#333333'}
            />
          </View>
         
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName="Home"
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => (
          <CustomTabButton route={route} focused={focused} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={CreateRecipeScreen} />
      <Tab.Screen name="Bookmarks" component={Bookmarks} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#FF6347',
   height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: RFValue(50),
    height: RFValue(60),
    borderRadius: RFValue(25),
    borderWidth: RFValue(4),
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
 ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6347', // Change the circle background color here
    borderRadius: RFValue(25),
  },

});
