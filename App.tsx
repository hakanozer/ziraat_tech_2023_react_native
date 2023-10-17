import {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// import pages
import Login from './pages/Login'
import RememberPassword from './pages/RememberPassword'
import Products from './pages/Products'
import Likes from './pages/Likes'
import Profile from './pages/Profile'


const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator();


// login stack
const LoginStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <Stack.Screen name="RememberPassword" component={RememberPassword} options={{ headerShown: false }} />
</Stack.Navigator>


export default function App() {
  
  return (
    <NavigationContainer>
      <View style={{zIndex: 1}}>
        <Toast />
      </View>
      <Stack.Navigator>
        <Stack.Screen name="LoginStack" component={LoginStack}  options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
});
