import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
//import { createTheme, useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BottomTabNavigator } from "./TabNavigator";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

// Create a MUI theme (customize as needed)
const theme = createTheme({
  // Define your theme properties here
});

const MainStackNavigator = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"HomeScreen"}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

const LoginStackNavigator = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export { MainStackNavigator, LoginStackNavigator };
