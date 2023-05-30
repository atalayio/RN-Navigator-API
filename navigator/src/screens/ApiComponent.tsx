import React from "react";
import { styles } from './';
import { useState, useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    ListRenderItem,
  } from 'react-native';
import { IPhoto } from './Types';




  
  export const fetchPhotos = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=50');
    const data = await response.json();
    return data as IPhoto[];
  };

  export default fetchPhotos;


