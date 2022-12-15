import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AppTitle from "../components/appTitle";

export default class WeatherDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppTitle />
                <View style={styles.screenContainer}>
                    <Text>WD</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Warning")}>
                        <Text>WD</Text>
                    </TouchableOpacity>
                    <View style={styles.teste}>
                        <View>
                        <Text>Hoje</Text>
                        <Text>teste</Text>
                        </View>
                        <View>
                        <Text>Amanhã</Text>
                        <Text>teste</Text>
                        </View>
                        <View>
                        <Text>Prox.</Text>
                        <Text>teste</Text>
                        </View>
                        <View>
                        <Text>Prox.</Text>
                        <Text>teste</Text>
                        </View>                        
                        <View>
                        <Text>Prox.</Text>
                        <Text>teste</Text>
                        </View>
                    </View>
                </View >
            </View >
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
        flex: 0.8
    },
    teste: {
        backgroundColor: "#5f99dc",
        borderWidth: 2,
        padding: 10,
        paddingVertical: 90,
        width: 350,
        height: 300,
        borderRadius: 10,
        margin: 200,
        marginTop: 10,
    }
});