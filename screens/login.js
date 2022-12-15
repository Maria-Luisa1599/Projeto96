import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import AppTitle from "../components/appTitle";
import firebase from "firebase";

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    login = () => {
        const {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                this.props.navigation.navigate("Home")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(errorCode)
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <AppTitle />
                <View style={styles.loginContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ email: text })}
                        placeholder={"Insira seu email"}
                        placeholderTextColor={"#000"}
                        autoFocus />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ password: text })}
                        placeholder={"Insira sua senha"}
                        placeholderTextColor={"#000"}
                        secureTextEntry />
                    <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 50}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Create User")}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c51bf"
    },
    loginContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center"
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
    textInput: {
        backgroundColor: "white",
        borderWidth: 3,
        padding: 10,
        width: 200,
        height: 55,
        borderRadius: 10,
        fontSize: 18,
        margin: 5
    }
});