import { Text, TextInput } from "react-native-paper"
import React, {useEffect} from 'react';
import {Alert, BackHandler, StyleSheet} from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { View } from "react-native";



export default function Home() {
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
      
    return (
        <View>
            <Text>Plan Your Journey</Text>
            <TextInput
                style={styles.input1}
                placeholder="Starting City"
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input1: {
        backgroundColor: "#E9ECEE",
        padding: 10,
        width: "70%",
        borderRadius: 10,
      }
})