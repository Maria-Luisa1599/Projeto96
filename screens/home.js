import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import AppTitle from "../components/appTitle";
var nublado = require("../assets/nublado.png")
var ensolarado = require("../assets/sol.png")
var chuvoso = require("../assets/chuva.png")
var tempestade = require("../assets/tempestade.png")

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppTitle />
                <View style={styles.screenContainer}>
                    <View style={styles.containerPrevisao}>
                        <View style={styles.headerPrev}>
                            <Text style={styles.textoPrevisao}>Manhã</Text>
                            <Text style={styles.textoPrevisao}>Tarde</Text>
                            <Text style={styles.textoPrevisao}>Noite</Text>
                        </View>
                        <View style={styles.previsaoDia}>
                            <Text style={styles.textoData}>Hoje</Text>
                            <Image source={nublado} style={styles.iconePrev} />
                            <Image source={chuvoso} style={styles.iconePrev} />
                            <Image source={ensolarado} style={styles.iconePrev} />
                        </View>
                        <View style={styles.previsaoDia}>
                            <Text style={styles.textoData}>Amanhã</Text>
                            <Image source={tempestade} style={styles.iconePrev} />
                            <Image source={ensolarado} style={styles.iconePrev} />
                            <Image source={nublado} style={styles.iconePrev} />
                        </View>
                        <View style={styles.previsaoDia}>
                            <Text style={styles.textoData}>Prox.</Text>
                            <Image source={chuvoso} style={styles.iconePrev} />
                            <Image source={chuvoso} style={styles.iconePrev} />
                            <Image source={tempestade} style={styles.iconePrev} />
                        </View>
                        <View style={styles.previsaoDia}>
                            <Text style={styles.textoData}>Prox.</Text>
                            <Image source={tempestade} style={styles.iconePrev} />
                            <Image source={nublado} style={styles.iconePrev} />
                            <Image source={ensolarado} style={styles.iconePrev} />
                        </View>
                        <View style={styles.previsaoDia}>
                            <Text style={styles.textoData}>Prox.</Text>
                            <Image source={ensolarado} style={styles.iconePrev} />
                            <Image source={ensolarado} style={styles.iconePrev} />
                            <Image source={chuvoso} style={styles.iconePrev} />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Warning")}>
                        <Text style={styles.buttonText}>Avisos</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7092be",
        flex: 1,
    },
    screenContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 0.6
    },
    containerPrevisao: {
        backgroundColor: "#5f99dc",
        flex: 0.5,
        borderWidth: 2,
        padding: 10,
        paddingVertical: 90,
        width: 350,
        height: 450,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "stretch",
    },
    previsaoDia: {
        flexDirection: "row",
        borderWidth: 2,
        height: 50,
        justifyContent: "space-between"
    },
    textoPrevisao: {
        textAlign: "center",
        margin: 2,
        width: 50
    },
    textoData: {
        textAlign: "center",
        alignItems: "center",
        margin: 2,
        width: 60
    },
    button: {
        borderColor: "black",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        margin: 10,
        width: 150
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center"
    },
    buttonContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    iconePrev: {
        width: 50,
        height: 50
    },
    headerPrev: {
        flexDirection: "row",
        marginLeft: 100,
        borderWidth: 2,
        justifyContent: "space-between"
    }
});