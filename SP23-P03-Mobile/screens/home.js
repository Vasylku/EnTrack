import { Text, TextInput } from "react-native-paper";
import React, {useEffect, useState} from 'react';
import {Alert, BackHandler, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';




export default function Home( {navigation} ) {
  // Show message asking the user if they would like to close the app when they press the
  // android back button
    useEffect(() => {
        const backAction = () => {
          Alert.alert("", "Would you like to exit?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            { text: "YES", onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

      // handle stuff
        const [text, setText] = useState("");
      
      
    return (
        <View style={styles.backgroundColor}>
          <View style={styles.loginButton}>
            <Button
            
            mode="contained"
            buttonColor="orange"
            textColor="black"
            onPress={() => navigation.navigate("Login")}
            >Login</Button>
          </View>

          <View style={styles.signUpButton}>
            <Button
            
            mode="contained"
            buttonColor="orange"
            textColor="black"
            onPress={() => navigation.navigate("SignUp")}
            >Sign Up</Button>
          </View>
            

            <Text style={styles.heading}>Plan Your Journey</Text>
            
            <View style={styles.inputs}>
            <TextInput
                style={styles.input1}
                mode="outlined"
                label="Starting Location"
                value={text}
                onChangeText={text => setText(text)}
            ></TextInput>

            <TextInput
                style={styles.input1}
                mode="outlined"
                label="Ending Location"
                value={text}
                onChangeText={text => setText(text)}
            ></TextInput>
            </View>

            <Button
            style={styles.enterButton}
            mode="contained"
            buttonColor="deepskyblue"
            textColor="black"
            >Enter</Button>
        </View>
    )
}

const styles = StyleSheet.create({

    backgroundColor: {
      backgroundColor: "gray",
      height: 1200
    },

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
     borderRadius: 10,
     
    },

    heading: {
      fontSize: 40,
      marginTop: 50,
      textAlign: "center",
      color: "white"
    },

    input1: {
        backgroundColor: "#E9ECEE",
        width: "70%",
        
    },

    inputs: {
      alignItems: "center"
    },

      signUpButton: {
        width: 120,
        marginTop: -40,
        marginLeft: 270
      },

      enterButton: {
        marginLeft: 250,
        marginTop: 20,
        width: 100
      },

      loginButton: {
        marginTop: 20,
        width: 100,
        marginLeft: 20
      }
})