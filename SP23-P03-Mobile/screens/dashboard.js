import { StyleSheet, View, Image } from "react-native";
import React, {useState, useEffect} from 'react';
import { Text, TextInput, Button } from "react-native-paper";
import { BaseUrl } from "../configuration";
import axios from "axios";





export default function Dashboard() {
    const [userInfo, setuserInfo] = useState("");

    function getUserInfo() {
        axios.get(BaseUrl + '/api/authentication/me')
        .then((response) => {
            const data = response.data.json;
            setuserInfo(data)
        })
        .catch((error) => {
            console.log(error);
          });
          
    }

      
    getUserInfo();
    return(
      
    <View style= {styles.container}>
      <Image style={styles.logo1} source={require('../assets/icon.jpg')} />
      
        <View style= {styles.text}>
      <Text style= {styles.text}>
        {/* Name: Jerry {'\n'}
        Email: jerry@gmail.com */}
       
        </Text>
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
        fontSize: 25
       },

       logo1: {
        resizeMode: "contain",
        width: 75,
        marginLeft: -275,
        marginTop: -180
       }

})