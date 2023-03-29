import { StyleSheet, View, Alert} from "react-native";
import React, {useState, useContext, useEffect} from 'react';
import { TextInput, Button } from "react-native-paper";
import { BaseUrl } from "../configuration";
import axios from "axios";
import authCookieContext from "../components/AuthCookieProvider";

export default function Login( {navigation} ) {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { authCookie, saveAuthCookie } = useContext(authCookieContext);

    async function getMeTest() {
        axios({
          method: "get",
          url: BaseUrl + "/api/authentication/me",
          // headers: { Cookie: authCookie.cookie },
        })
          .then(function (response) {
            setIsLoggedIn(true);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    
    function handleLogin() {
        axios.post(BaseUrl + '/api/authentication/login', {
            userName: userName,
            password: password,
        })
        .then(function (response){
            setIsLoggedIn(true)
            var cookie = response.headers["set-cookie"][0].split(";")[0];
            var item = { roles: response.data.roles, cookie: cookie };
           async function temp() {
            await saveAuthCookie(item);           
                navigation.navigate("Dashboard");
            
           }
            temp();
        })
        .catch(function (error) {
            console.log(error)
            Alert.alert("Invalid Username or Password!");
        });
    }

    useEffect(() => {
        getMeTest();
      }, []);

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
            autoCapitalize="none"
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