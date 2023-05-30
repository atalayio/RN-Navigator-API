import React from "react";
import { styles } from './';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./TabN"

function Deneme(): JSX.Element {


    return (

      <SafeAreaView style={styles.Background} >
        <Text> Deneme! </Text>
      </SafeAreaView>

    );
  }

  
export default Deneme;