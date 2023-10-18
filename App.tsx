import {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

// import pages
import Login from './pages/Login'
import RememberPassword from './pages/RememberPassword'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
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

// product stack
const productsStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Product" component={Products} options={{ headerShown: false }} />
  <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
</Stack.Navigator>


// likes stack
const likesStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Likes" component={Likes} options={{ headerShown: false }} />
</Stack.Navigator>


// likes stack
const profileStack = () => 
<Stack.Navigator>
  <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
</Stack.Navigator>


// App Tabs
const AppTabs = () =>
<Tab.Navigator
  initialRouteName='Products'
  activeColor='#ffffff'
  inactiveColor='#000000'
  barStyle={{ backgroundColor: '#4287f5', }}
>
  <Tab.Screen 
    name='Products'
    component={productsStack}
    options={{
      tabBarIcon: ( {color, size} : any ) => (
        <SimpleLineIcons name="basket" size={25} color={color} />
      )
    }}
  />
  <Tab.Screen 
    name='Likes'
    component={likesStack}
    options={{
      tabBarIcon: ( {color, size} : any ) => (
        <SimpleLineIcons name="heart" size={25} color={color} />
      )
    }}
  />
  <Tab.Screen 
    name='Profile'
    component={profileStack}
    options={{
      tabBarIcon: ( {color, size} : any ) => (
        <Ionicons name="md-person-outline" size={25} color={color} />
      )
    }}
  />
</Tab.Navigator>

export default function App() {
  
  return (
    <NavigationContainer>
      <View style={{zIndex: 1}}>
        <Toast />
      </View>
      <Stack.Navigator>
        <Stack.Screen name="LoginStack" component={LoginStack}  options={{ headerShown: false }}  />
        <Stack.Screen name="AppTabs" component={AppTabs}  options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
});
