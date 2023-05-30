import React, { Component } from "react";
import { styles } from './';
import { useState, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { IPhoto } from './Types';
import fetchPhotos from "./ApiComponent";
import { useNavigation } from "@react-navigation/native";
import { Mail, Settingspage, Home, Deneme } from './';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { createStackNavigator,  } from "@react-navigation/stack";
import {  NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import * as NavigationService from './Details';


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
    Button,
  } from 'react-native';
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    useEffect(() => {
      fetchPhotos().then((data) => setPhotos(data));
    }, []);

export type RootStackParamList = {
  Deneme: undefined,
}

const CardView = (props: any ) => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
      
      <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
            <TouchableOpacity onPress={() => navigate("Deneme")}>
              <Image source={{ uri: props.image }} style={styles.image} />
            </TouchableOpacity>
        <Text style={styles.caption}>{props.caption}</Text>
      </View>
      
    );
  }

  const DetailsView = (props: any) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.caption}>{props.caption}</Text>
      </View>
    );
  }

  export default CardView;



