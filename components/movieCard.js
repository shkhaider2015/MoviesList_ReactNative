import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';
import IMAGE from "../assets/images/blindfire.jpg";

const style = StyleSheet.create(
    {
        root: {
            width: '100%',
            height: '70%'
        },
        myImage: {
            width: '100%',
            height: '90%'
        },
        title: {
            fontSize: 32,
            fontWeight: 'bold'
        }
    }
)

export function MovieCard({ value }) {
    return (
        <Card style={style.root} >
            <View  >
                <Image
                    resizeMode="stretch"
                    source={value.img}
                    style={style.myImage}
                />
            </View>
            <Text style={style.title} >{value.name}</Text>
            <Text> {value.desc} </Text>
        </Card>
    )
}