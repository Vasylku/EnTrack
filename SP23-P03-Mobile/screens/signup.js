import { StyleSheet, View, Alert } from "react-native";
import React, {useState} from 'react';
import { TextInput, Button } from "react-native-paper";
import { BaseUrl } from "../configuration";
import axios from "axios";
export default function SignUp( {navigation} ) {

    const [userName, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    function handleSignUp() {
        if (password != confirmPassword) {
                Alert.alert("Passwords must match!")
                return;
        }
        axios.post(BaseUrl + "/api/users", {
        userName: userName,
        password: password,
        email: email,
      })
      .then(function (response) {
        console.log(response.data);
        navigation.goBack();
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("Invalid Username or Password.");
      });
    }
    return (

    <View style={styles.container}>
        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Name"
                value={userName}
                onChangeText={setuserName}
         ></TextInput>

        

        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Email"
                value={email}
                onChangeText={setEmail}
        ></TextInput>

        

        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
        ></TextInput>

        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Confirm Password"
                value={confirmPassword}
                secureTextEntry
                onChangeText={setconfirmPassword}
        ></TextInput>

        <Button
            style={styles.signUpButton}
            mode="contained"
            buttonColor="deepskyblue"
            textColor="black"
            onPress={handleSignUp}
            >Sign Up</Button>
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

    signUpButton: {
        marginLeft: 200,
        marginTop: 20
      }


})