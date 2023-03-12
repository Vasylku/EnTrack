import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/home";
const Stack = createNativeStackNavigator();


export default function Navigator() {
    return (
        <Stack.Navigator intialRouteName = "Home">
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}