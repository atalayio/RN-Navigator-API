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

function Settingspage(): JSX.Element {


    return (
      <SafeAreaView style={styles.Background} >
        <Text> Settings Page </Text>

  
      </SafeAreaView>
    );
  }


export default Settingspage;

