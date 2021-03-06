import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';
import IMAGE from "../assets/images/blindfire.jpg";

const style = StyleSheet.create(
    {
        root: {
            width: 170,
            height: 170
        },
        myImage: {
            width: 120,
            height: 100
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        text : {
            fontSize : 12
        }
    }
)

export default function MovieCard({ value }) {
    return (
        <Card style={style.root} >
            <View  >
                <Image
                    resizeMode="center"
                    source={value.img}
                    style={style.myImage}
                />
            </View>
            <Text style={style.title} >{value.name}</Text>
            <Text style={style.text} > {value.rd} </Text>
        </Card>
    )
}