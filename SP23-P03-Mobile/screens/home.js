import { Text, TextInput } from "react-native-paper";
import React, {useEffect, useState} from 'react';
import {Alert, BackHandler, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';



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
        const [start, setStart] = useState("");
        const [dest, setDest] = useState("");
        const [date, setDate] = useState(new Date());
        const [picker, setPicker] = useState(false);
        const [mode, setMode] = useState("date");
        const [text, setText] = useState("");

        const showDatePicker = (currentMode) => {
          setPicker(true);
          setMode(currentMode);
        }

        const onChange = (even, selectedDate) => {
          const currentDate = selectedDate || date;
          setPicker(false);
          setDate(currentDate);

          let tempDate = new Date(currentDate);
          let fDate = (tempDate.getMonth() + 1) + '/' +tempDate.getDate() + '/' + tempDate.getFullYear();
          setText(fDate)

          
        }

        
        

        
        

        
        return (
          
        <View  style={styles.backgroundColor}>
          
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
            

            <Text style={styles.heading}>Find a Train</Text>
            
            <View style={styles.inputs}>
            <TextInput
                style={styles.input1}
                mode="outlined"
                label="Starting Location"
                value={start}
                onChangeText={setStart}
            ></TextInput>

            <TextInput
                style={styles.input1}
                mode="outlined"
                label="Ending Location"
                value={dest}
                onChangeText={setDest}
            ></TextInput>
            </View>

            <Text style={{fontWeight: "bold", fontSize: 20}}>{text}</Text>
            
              <Button style={styles.datePickerButton}
            mode="contained"
            buttonColor="#5F9FCA"
            textColor="white"
              title="DatePicker" 
              onPress={() => showDatePicker("date")}>Find a Train</Button>
            

            {picker && (
              <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}/>
            ) }

            
                
             

            <Button
            style={styles.enterButton}
            mode="contained"
            buttonColor="#5F9FCA"
            textColor="white"
            >Search</Button>
           
        </View>
        
    )
}

const styles = StyleSheet.create({

    backgroundColor: {
      backgroundColor: "white",
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
      color: "black"
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
      },

      datePicker: {
        width: 200,
        marginTop: 20
      },

      datePickerButton: {
        backgroundColor: "#5F9FCA",
        width:150,
        borderRadius:20,
        marginLeft: 200,
        marginTop: 20
      }
})