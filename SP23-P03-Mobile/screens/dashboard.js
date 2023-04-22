import { StyleSheet, View, Image } from "react-native";
import React, {useState, useEffect} from 'react';
import { Text, TextInput, Button } from "react-native-paper";
import { BaseUrl } from "../configuration";
import axios from "axios";





export default function Dashboard() {
    const [ticket, setTicket] = useState("");

    useEffect(() => {
        axios.get(BaseUrl + '/api/tickets/')
        // .then((response) => {
        //     const data = response.data.json;
        //     setTicket(data)
        // })
        .then((x) => setTicket(x.data));
        // .catch((error) => {
        //     console.log(error);
        //   });
          
    });

      
    
    return(
      
    <View style= {styles.container}>
      
      <Image style={styles.logo1} source={require('../assets/icon.jpg')} />
      
        <View>
      <Text style={styles.date1}>
        Apr 20
       </Text>
      </View>

      <View>
        <Text style={styles.text}>HAM</Text>
      </View>

      <View>
        <Text style={styles.text2}>Hammond</Text>
      </View>

      <View>
      <Text style={styles.date2}>
        Apr 20
       </Text>
      </View>

      <View>
        <Text style={styles.text3}>NEW</Text>
      </View>

      <View>
        <Text style={styles.text4}>New Orleans</Text>
      </View>

      

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -20}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
    
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -40}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
    
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View>
        <Text style={styles.departure}>Departure</Text>
      </View>

      <View>
        <Text style={styles.departTime}>4:15am</Text>
      </View>

      <View>
        <Text style={styles.arrive}>Arrival</Text>
      </View>

      <View>
        <Text style={styles.arriveTime}>6:15am</Text>
      </View>

      <View>
        <Text style={styles.passengers}>Passengers</Text>
      </View>

      <View>
        <Text style={styles.passengerCount}>1</Text>
      </View>

      <View>
        <Text style={styles.seatType}>Seat Type</Text>
      </View>

      <View>
        <Text style={styles.seatType2}>Type</Text>
      </View>

      <View>
        <Text style={styles.seat}>Seat</Text>
      </View>

      <View>
        <Text style={styles.seat2}>c1</Text>
      </View>

      <View>
        <Text style={styles.boardingPass}>Boarding Pass</Text>
      </View>
      
    </View>

    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // flex:  1,
        // flexDirection:  'row', 
        // flexWrap:  'wrap', 
        marginTop:  75,
        width:  375,
        height:  620,
        marginLeft:  20,
        marginBottom:  420, 
        backgroundColor:  'lightgrey', 
        borderWidth:  2, 
        //justifyContent:  'center',
        borderRadius: 10,
        
       },

       text: {
        fontSize: 25,
        color: "#5F9FCA",
        marginLeft: -170,
        marginTop: -130
       },

       text2: {
        marginLeft: -170,
        marginTop: -95,
        color: "black"
       },

       text3: {
        fontSize: 25,
        color: "#5F9FCA",
        marginLeft: 270,
        marginTop: -130
       },

       text4: {
        marginLeft: 235,
        marginTop: -95,
        color: "black"
       },

       logo1: {
        resizeMode: "contain",
        width: 75,
        marginLeft: -275,
        marginTop: -180,
       },

       date1: {
        marginLeft: -170,
        marginTop: -150,
        color: "black"
       },

       date2: {
        marginLeft: 280,
        marginTop: -147,
        color: "black"
       },

       departure: {
        fontSize: 20,
        marginLeft: -175,
        marginTop: 50,
        color: "black"
      },

       departTime: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: -175,
        color: "black"
      },

        arrive: {
          fontSize: 20,
          marginLeft: 260,
          marginTop: -60,
          color: "black"
        },

        arriveTime: {
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 260,
          marginTop: -30,
          color: "black"
        },

        passengers: {
          fontSize: 20,
          marginTop: 20,
          marginLeft: -175,
          color: "black"
        },

        passengerCount: {
          fontSize: 20,
          marginLeft: -175,
          fontWeight: 'bold',
          color: "black"
        },

        seatType: {
          fontSize: 20,
          marginTop: -60,
          marginLeft: 40,
          color: "black"
        },

        seatType2: {
          fontWeight: 'bold',
          marginTop: -25,
          color: "black"
        },

        seat: {
          fontSize: 20,
          marginLeft: 270,
          marginTop: -60,
          color: "black"
        },

        seat2: {
          fontWeight: 'bold',
          marginLeft: 270,
          marginTop: -25,
          color: "black"
        },

        boardingPass: {
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 20,
          color: "black"
        },

        



})