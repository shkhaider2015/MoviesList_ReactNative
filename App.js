import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
// import { MovieCard } from './components/movieCard';
// import { FlatGrid } from "react-native-super-grid";
// import { myData } from "./assets/data";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./components/listItems"
import DetailsScreen from "./components/details"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />
        <Stack.Screen
        name="Details"
        component={DetailsScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  grid : {
    marginTop : 10,
    flex : 1
  },
  itemContainer : {
    height : 200,
    borderRadius : 5,
    padding : 5
  }
});
