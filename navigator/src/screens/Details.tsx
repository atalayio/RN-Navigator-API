import React from "react";
import { Deneme, styles } from './';
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabN"
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

const Stack = createStackNavigator();


const Details = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Deneme"
                    component={Deneme}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Details;
