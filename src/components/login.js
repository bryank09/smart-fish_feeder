import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';


export const Login = () => {
    const [state, setState] = useState({ email: '', password: '', });
    const onPressLogin = () => {
        database()
            .ref('/users_id/1')
            .once('value')
            .then(snapshot => {
                console.log('User data: ', snapshot.val());
            });
    };
    const onPressForgotPassword = () => {
        // Do something about forgot password operation
    };
    const onPressSignUp = () => {
        // Do something about signup operation
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Login Screen</Text>
            <View style={styles.inputView}>

                <TextInput style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ email: text })} />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setState({ password: text })} />
            </View>
            <TouchableOpacity onPress={onPressForgotPassword}>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressSignUp}>
                <Text style={styles.inputText}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4FD3DA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgotAndSignUpText: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
})