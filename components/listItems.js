import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import MovieCard from './movieCard';
import { FlatGrid } from "react-native-super-grid";
import myData from "../assets/data";

export default function ListItems({ navigation })
{
    
    return (
        <FlatGrid
            style={styles.grid}
            itemDimension={130}
            data={myData}
            spacing={10}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={  ()=> navigation.navigate("Details", { "title" : item.name, "img" : item.img, "desc" : item.desc, "rd" : item.rd } )}
                    
                >
                    <MovieCard
                        value={item}
                    />
                </TouchableOpacity>
            )}
        >

        </FlatGrid>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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