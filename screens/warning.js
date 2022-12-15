import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Warning extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("../assets/dia-nublado2.png")} style={styles.titleIcon}/>
                <Text>Clima</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7092be",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleIcon: {
        width: 100,
        height: 100,
    }
});