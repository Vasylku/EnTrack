import { StyleSheet, View, Alert } from "react-native";
import React, {useState} from 'react';
import { TextInput, Button } from "react-native-paper";
import { BaseUrl } from "../configuration";
import axios from "axios";

export default function Login( navigation ) {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        axios.post(BaseUrl + '/api/authentication/login', {
            userName: userName,
            password: password,
        })
        .then(function (response){
            setIsLoggedIn(true)
            navigation.goBack();
        })
        .catch(function (error) {
            console.log(error)
        });
    }


    return(
        <View style={styles.container}>
            <TextInput
                style = {styles.input1}
                label="Name"
                mode="outlined"
                value={userName}
                onChangeText={setuserName}
            ></TextInput>

            <TextInput
            style = {styles.input1}
            label = "Password"
            mode="outlined"
            secureTextEntry
            value={password}
            onChangeText ={setPassword}
            ></TextInput>

            <Button
            style = {styles.loginButton}
            mode = "contained"
            buttonColor="deepskyblue"
            textColor="black"
            onPress={handleLogin}
            >Login</Button>

        </View>










    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:  1,
        flexDirection:  'row', 
       flexWrap:  'wrap', 
        marginTop:  75,
        width:  375,
        height:  120,
        marginLeft:  20,
        marginBottom:  120, 
        backgroundColor:  'lightgrey', 
        borderWidth:  2, 
        justifyContent:  'center',
        borderRadius: 10
       },


    input1: {
        backgroundColor: "#E9ECEE",
        width: "70%",
        marginTop: 10
    },

    loginButton: {
        marginLeft: 200,
        marginTop: 20
      }


})