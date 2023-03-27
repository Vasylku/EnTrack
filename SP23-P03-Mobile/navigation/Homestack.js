import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/home";
import SignUp from "../screens/signup";
import Login from "../screens/login";
import Dashboard from "../screens/dashboard";
import { Menu } from "../screens/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => {
    return(
        <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name="Home" component={Home}/>
            </Drawer.Navigator>
    )
}

export default function Navigator() {
    return (
        <Stack.Navigator intialRouteName="Login">
            <Stack.Group
            screenOptions={{
                headerStyle: {
                  backgroundColor: "#5F9FCA",
                },
                headerTintColor: "#eee",
              }}
            >
            <Stack.Screen 
                name="Root" 
                component={Root} 
                options={{
                    title: "Entrack",
                    headerBackVisible: false,
                    gestureEnabled: false,
                }}
                />
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Login"  component={Login}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}