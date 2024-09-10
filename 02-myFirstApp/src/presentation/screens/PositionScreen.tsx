import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const PositionScreen = () => {
  return (
    <View style={style.container}>
        <View style={style.purpleBox}/>
        <View style={style.orangeBox}/>
    </View>
  )
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#28C4D9",
        // justifyContent: "center",
        // alignItems: "center"
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: "#5856D6",
        borderColor:'white',
        borderWidth: 10,
        position: "absolute",
        top: 50,
        // left: 100,
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: "#F0A23B",
        borderWidth: 10,
        borderColor:'white',
        // bottom: -50,
        // left: -100
    },

})