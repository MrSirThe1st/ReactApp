import React from "react";
import {View, Text} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { StyleSheet } from 'react-native';

const IconText = (props) => {
    const {iconName, iconColor, bodyText, bodyTextStyles} = props 
    const {container, textTheme} = style
    return (
        <View style = {container}>
            <Feather name = {iconName} size = {50} color = {iconColor}/>
            <Text style = {[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center'
    }
})
export default IconText