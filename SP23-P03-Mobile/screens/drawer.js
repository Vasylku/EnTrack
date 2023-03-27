import React from "react";
import { Alert, View } from "react-native";
import { Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import axios from "axios";
import { useContext, useState } from "react";
import authCookieContext from "../components/AuthCookieProvider";
import { BaseUrl } from "../configuration";

export function Menu({navigation}) {
    const {authcookie, saveAuthCookie} = useContext(authCookieContext);
    const [userName, onChangeUserName] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogout() {
        axios({
            method: "post",
            url: BaseUrl + "/api/authentication/logout",
            headers: {Cookie: authcookie },
        })
       .then(function () {
            saveAuthCookie("AUTH-COOKIE");
            onChangeUserName("");
            onChangePassword("");
            setIsLoggedIn(false);
            navigation.navigate("Login");
    })
        .catch(function (error) {
            console.log(error);
            Alert.alert("You are not signed in.");
        });
}

return (
    <View>
        <Drawer.Section>
            <Drawer.Item
                icon={({color, size}) => (
                    <Icon name="home" color={color} size={size}/>
                )}
                label="Home"
                onPress={() => navigation.navigate("Home")}
            ></Drawer.Item>
        </Drawer.Section>

        <Drawer.Section>
            <Drawer.Item
            icon={({ color, size }) => (
                <Icon name="exit-to-app" color={color} size={size} />
              )}
              label="Log Out"
              onPress={handleLogout}
            ></Drawer.Item>
        </Drawer.Section>

    </View>
);

}

const styles = StyleSheet.create({
    
})