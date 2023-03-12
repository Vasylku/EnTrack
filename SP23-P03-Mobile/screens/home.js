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
        <View style={styles.container}>
          
            <Button
            style={styles.button}
            mode="contained"
            buttonColor="orange"
            textColor="black"
            onPress={() => navigation.navigate("SignUp")}
            >Sign Up</Button>

            <Text style={styles.heading}>Plan Your Journey</Text>
            
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

            <Button
            style={styles.button2}
            mode="contained"
            buttonColor="deepskyblue"
            textColor="black"
            >Enter</Button>
        </View>
    )
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

    heading: {
      fontSize: 30,
      marginTop: 80
    },

    input1: {
        backgroundColor: "#E9ECEE",
        width: "70%",
    },

      button: {
        marginLeft: 200,
        marginTop: 20
      },

      button2: {
        marginLeft: 200,
        marginTop: 20
      }
})