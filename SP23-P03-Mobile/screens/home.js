import { Text, TextInput, Button } from "react-native-paper";
import React, {useEffect, useState} from 'react';
import {Alert,
        BackHandler, 
        StyleSheet, 
        View, 
        Pressable,
        Platform
        } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";
import { BaseUrl } from "../configuration";


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

     
        // const [start, setStart] = useState("");
        // const [dest, setDest] = useState("");
        // const [date, setDate] = useState(new Date());
        // const [picker, setPicker] = useState(false);
        // const [mode, setMode] = useState("date");
        // const [text, setText] = useState("");
        // const [travelDate, setTravelDate] = useState("");

        
        const [ticketID, setTicketID] = useState(0);
        const [ticket, setTicket] = useState([]);

        

        useEffect(() => { 
          axios.get(BaseUrl + `/api/tickets/?mycode=${ticketID}`)
          .then((response) => { setTicket(response.data)
          })
          .catch(function (error) { 
            console.log(error)
            
        });
      },  [ticketID])
      

        

        // const showDatePicker = (currentMode) => {
        //   setPicker(true);
        //   setMode(currentMode);
        // }

        // const togglePicker = () => {
        //   setPicker(!picker);
        // }

        // const onChange = ({ type }, selectedDate) => {
        //   if (type == "set") {
        //   const currentDate = selectedDate || date;
        //   setPicker(false);
        //   setDate(currentDate);
        //     if (Platform.OS === "android") {
        //       togglePicker();
        //       setTravelDate(currentDate.toDateString());
        //     }

        //   } else {
        //     togglePicker();
        //   }

        //   let tempDate = new Date(currentDate);
        //   let fDate = (tempDate.getMonth() + 1) + '/' +tempDate.getDate() + '/' + tempDate.getFullYear();
        //   setText(fDate)
        // }
        
        

        return (          
        <View  style={styles.backgroundColor}>    

          <View style={styles.inputs}>
          <TextInput
                style={styles.input1}
                mode="outlined"
                placeholder="Enter Ticket ID"
                placeholderTextColor="black"
                value={ticketID}
                onChangeText={setTicketID}
                keyboardType="numeric"
            
            ></TextInput>

            <View style={styles.loginButton}>
            <Button
              mode="contained"
              buttonColor="#5F9FCA"
              textColor="white"
              onPress={() => navigation.navigate("Dashboard", {ticket} )}
             
            >Search</Button>
            </View>

          </View>


          {/* <View style={styles.loginButton}>
            <Button
            style={styles.button}
            mode="contained"
            buttonColor="#5F9FCA"
            textColor="white"
            onPress={() => navigation.navigate("Login")}
            >Login</Button>
          </View>

          <View style={styles.signUpButton}>
            <Button
            style={styles.button}
            mode="contained"
            buttonColor="#5F9FCA"
            textColor="white"
            onPress={() => navigation.navigate("SignUp")}
            >Sign Up</Button>
          </View> */}
            
          
            {/* <Text style={styles.heading}>Find a Train</Text>
            
            <View style={styles.inputs}>
            <TextInput
                style={styles.input1}
                mode="outlined"
                //label="Starting Location"
                placeholder="Starting Location"
                placeholderTextColor="black"
                value={start}
                onChangeText={(text) => setStart(text)}
            ></TextInput>

            <TextInput
                style={styles.input1}
                mode="outlined"
                //label="Ending Location"
                placeholder="Ending Location"
                placeholderTextColor="black"
                value={dest}
                onChangeText={setDest}
            ></TextInput>

            {!picker && (
             <Pressable
                onPress={togglePicker}>
             <TextInput
               style={styles.datePicker}
               mode="outlined"
               placeholder="Select Travel Date"
               placeholderTextColor="black"
               value={travelDate}
               onChangeText={setTravelDate}
               editable={false}/>
               
            </Pressable>
           )}
            </View>

            <Text style={{fontWeight: "bold", fontSize: 20}}>{text}</Text>
             */}
            
              {/* <Button style={styles.datePickerButton}
                mode="contained"
                buttonColor="#5F9FCA"
                textColor="white"
                title="DatePicker" 
                onPress={() => showDatePicker("date")}>Select Date</Button>
             */}
           


            {/* {picker && (
              <DateTimePicker
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
              onPress={() => {
                setStart();
                setDest();

                {travelDate}
              }}
            >Search</Button> */}
           
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
      marginTop: 300,
      color: "black"  
    },

    inputs: {
      alignItems: "center",
      color:"black"
    },

      signUpButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
      },

      button: {
        width: 300,
        padding: 10,
      },

      enterButton: {
        marginLeft: 250,
        marginTop: 20,
        width: 100
      },

      loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },

      datePicker: {
        width: 289,
        backgroundColor: "#E9ECEE"
      },

      datePickerButton: {
        backgroundColor: "#5F9FCA",
        width:150,
        borderRadius:20,
        marginLeft: 200,
        marginTop: 20
      }
})