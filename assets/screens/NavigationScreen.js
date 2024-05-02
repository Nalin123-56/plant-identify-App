import React from 'react'
import { View , Text} from 'react-native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartPage from './StartPage';
import Second from './Second';
import Third from './Third';

const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
      headerShown:false
     }} initialRouteName= "startPage" >
      <Stack.Screen name="startPage" component={StartPage} /> 
      <Stack.Screen name="second" component={Second} />
      <Stack.Screen name="third" component={Third} />
    </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default NavigationScreen
