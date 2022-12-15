import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import Warning from "../screens/warning";

const Stack = createStackNavigator()

export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{headerShown: false}}>
                <Stack.Screen name="TabNavigator" component={TabNavigator}/>
                <Stack.Screen name="Warning" component={Warning}/>
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});