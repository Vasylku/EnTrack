import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import React from 'react';
import Navigator from './navigation/Homestack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import { AuthCookieProvider } from "./components/AuthCookieProvider";

export default function App() {
  
  
  return (
    <PaperProvider>
      <AuthCookieProvider>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
      </AuthCookieProvider>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
