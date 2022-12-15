import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class AppTitle extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("../assets/dia-nublado2.png")} style={styles.titleIcon}/>
                <Text style={styles.titleText}>Temperatura Local</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: 45,
        color: "white",
    },
    titleIcon: {
        width: 100,
        height: 100,
    }
});