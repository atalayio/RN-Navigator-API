import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Settingspage, styles, Home, Deneme } from './';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, ListRenderItem, TouchableHighlight, TouchableOpacity } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  ScrollView,
  Settings,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CardView from './Components';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParams = {
  Deneme: undefined,
}

const Tab = createBottomTabNavigator();

const TabN = () => {

  return (
    <Tab.Navigator screenOptions= {({ route }) =>
({
  headerShown: false,
  showIcon: true,
  showLabel: true,
  tabBarActiveTintColor: "#4b0082",
  tabBarInactiveTintColor: "black",
  tabBarStyle: styles.TabBarStyle,
  tabBarIcon: ({ color, size, focused }) => {
    let IconName: string = ""

    if (route.name == "Home") {
      IconName = focused ? 'home' : 'home-outline';

    }
    else if (route.name == "Mail") {
      IconName = focused ? 'mail' : 'md-mail-outline';

    }
    else if (route.name == "Settings") {
      IconName = focused ? 'settings' : 'settings-outline';

    }
    else if (route.name == "Deneme") {
      IconName = focused ? 'settings' : 'settings-outline';

    }
    return <Icon name={ IconName } size = { 25} color = { color } />
          }
})} 
        >

  <Tab.Screen name='Home' component = { Home } options = {({ navigation }) => ({
    tabBarButton: (props) => (
      <TouchableOpacity
          { ...props }
          onPress={() => navigation.navigate('Home')
  }
    />
      ),
    })}  />
  < Tab.Screen name = 'Mail' component = { Mail } options = {({ navigation }) => ({
    tabBarButton: (props) => (

      <TouchableOpacity

          { ...props }
          onPress={() => navigation.navigate('Mail')
  }
          style = { styles.tabbarStyle }
  >
  </TouchableOpacity> 
      ),
    })}  />

  < Tab.Screen name = 'Settings' component = { Settingspage } options = {({ navigation }) => ({
    tabBarButton: (props) => (
      <TouchableOpacity
          { ...props }
          onPress={() => navigation.navigate('Settings')
  }
    />
      ),
    })} />

  </Tab.Navigator>
  );
}

export default TabN;