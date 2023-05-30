import React, { createElement } from "react";
import { styles } from './';
import { useState, useEffect } from "react";
import CardView from "./Components";
import fetchPhotos from "./ApiComponent";
import { IPhoto } from './Types';
import { useNavigation } from "@react-navigation/native";
import { Mail, Settingspage } from './';
import { NavigationContainer } from "@react-navigation/native";
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { createStackNavigator } from "@react-navigation/stack";
import {
  FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ListRenderItem
  } from 'react-native';
import { Icon } from "react-native-vector-icons/Icon";

  

function Home(): JSX.Element {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  useEffect(() => {
    fetchPhotos().then((data) => setPhotos(data));
  }, []);

  const renderPhoto: ListRenderItem<IPhoto> = ({ item }) => {
    return <CardView title={item.albumId} image={item.url} caption={item.title}/>;
    
  };
    return (
      
      <SafeAreaView style={styles.Background} >
        <FlatList 
      data={photos}
      renderItem={renderPhoto}  
        />
      </SafeAreaView>
    );
  }


export default Home;


