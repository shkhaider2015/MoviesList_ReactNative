import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';

const style = StyleSheet.create(
    {
        root: {
        },
        myImage: {
            width : 350,
            height: 400
        },
        title: {
            marginTop : 10,
            fontSize: 16,
            fontWeight: 'bold'
        },
        text : {
            fontSize : 12
        },
        desc : {
            fontSize : 10
        }
    }
)

export default function Details({ navigation, route }) {
    const { title, img, desc, rd } = route.params
    
    return (
        <Card style={style.root} >
                <Image
                    resizeMode="cover"
                    source={img}
                    style={style.myImage}
                />
            <Text style={style.title} >{title}</Text>
            <Text style={style.text} > {desc} </Text>
            <Text style={style.desc} > {rd} </Text>
        </Card>
    )
}