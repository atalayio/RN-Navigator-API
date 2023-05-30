import React from "react";
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
  } from 'react-native';



  const styles = StyleSheet.create({
    Background: {
      flex: 1,
      backgroundColor: "#e6e6fa"
    },
    TabBarStyle: {
      position: "absolute",
      backgroundColor: "#ffe4c4",
      elevation: 0,
      borderTopWidth: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    Viewground: {
        flex: 1,
      },
      card: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 20,
        margin: 10,
      },
      image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      caption: {
        fontSize: 16,
        color: '#555',
      },
      roundedView: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        left: 0,
      },
      tabbarStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      animationContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });
  export default styles;


