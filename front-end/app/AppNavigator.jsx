import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './pages/MainPage';
import FrontPage from './contents/FrontPage';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
 
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            headerStyle: {
              height: 1, 
            },
            headerTitle: '',  
             backgroundColor: '#004d00'
          }}
        />
        <Stack.Screen
          name="FrontPage"
          component={FrontPage}
          options={{
            headerStyle: {
              height: 60,  
            },
          }}
        />
    
      </Stack.Navigator>
    
  );
}
