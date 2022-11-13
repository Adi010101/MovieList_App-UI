/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieListScreen from './screens/MoviesList';
import MovieDetailScreen from './screens/MovieDetail';



const Stack = createNativeStackNavigator();
export default class MovieListApp extends Component{

  render(){
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MovieListScreen"
          component={MovieListScreen}
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen
          name="MovieDetailScreen"
          component={MovieDetailScreen}
          options={{
            title: "",
            headerStyle:{
              backgroundColor: '#3c457c',
            },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}



