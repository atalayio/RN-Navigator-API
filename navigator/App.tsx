import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Settingspage, styles, Home, Deneme } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, ListRenderItem, TouchableHighlight, TouchableOpacity } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import Details from "./src/screens/Details"
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
import CardView from './src/screens/Components';
import { createStackNavigator } from '@react-navigation/stack';



const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <SafeAreaView style={styles.Viewground} > 
      <Details />
    </SafeAreaView>
  )
    
}
export default App;