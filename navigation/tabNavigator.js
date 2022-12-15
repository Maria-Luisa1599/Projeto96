import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import WeatherDetails from "../screens/weatherDetails";
import Home from "../screens/home";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator()

export default class TabNavigator extends React.Component{
    render(){
        return(
            <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'sunny'
                            : 'sunny-outline';
                    } else if (route.name === 'WeatherDetails') {
                        iconName = focused ? 'cloudy' : 'cloudy-outline';
                    }
                    return <Ionicons name={iconName} size={RFValue(20)} color={color} style={styles.icons} />;
                },
            })}

            activeColor={'#EE8249'}
            inactiveColor={'gray'}>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="WeatherDetails" component={WeatherDetails}/>
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#375282",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
    },
    bottomTabStyleLight: {
        backgroundColor: "#eaeaea",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(25),
        height: RFValue(25)
    }
});

//Ajeitar o Tab, colocar icones e ajustar os estilos da tela