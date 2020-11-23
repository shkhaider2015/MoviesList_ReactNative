import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MovieCard } from './components/movieCard';
import { FlatGrid } from "react-native-super-grid";
import { myData } from "./assets/data";

export default function App() {
  return (
    <FlatGrid
    style={styles.grid}
    itemDimension={130}
    data={myData}
    spacing={10}
    renderItem={ ({item}) => (
      <MovieCard value={item} />
    ) }
    >

    </FlatGrid>
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
  }
});
