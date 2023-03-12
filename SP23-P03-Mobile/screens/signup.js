import { StyleSheet, View } from "react-native";
import React, {useEffect, useState} from 'react';
import { Text, TextInput, Button } from "react-native-paper";

export default function SignUp( {navigation} ) {

    const [text, setText] = useState("");
    return (

    <View style={styles.container}>
        <TextInput
                style={styles.input1}
                mode="outlined"
                label="First Name"
                value={text}
                onChangeText={text => setText(text)}
         ></TextInput>

        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Last Name"
                value={text}
                onChangeText={text => setText(text)}
        ></TextInput>

        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Email Address"
                value={text}
                onChangeText={text => setText(text)}
        ></TextInput>

        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Confirm Email"
                value={text}
                onChangeText={text => setText(text)}
        ></TextInput>

        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Password"
                value={text}
                onChangeText={text => setText(text)}
        ></TextInput>

        <TextInput
                style={styles.input1}
                mode="outlined"
                label="Confirm Password"
                value={text}
                onChangeText={text => setText(text)}
        ></TextInput>

        <Button
            style={styles.button2}
            mode="contained"
            buttonColor="deepskyblue"
            textColor="black"
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

    button2: {
        marginLeft: 200,
        marginTop: 20
      }


})