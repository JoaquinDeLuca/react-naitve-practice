import React from 'react'
import { StyleSheet, View } from 'react-native'

export const HomeWorkSrceen = () => {
  return (
    <View style={style.container}>
        <View style={[style.box, style.purpleBox]}/>
        <View style={[style.box, style.orangeBox]}/>
        <View style={[style.box, style.blueBox]}/>
    </View>
  )
}

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#28425B",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "row",
        // alignSelf: "stretch"
    }, 
    box:{
        width:100,
        height: 100,
        borderWidth: 10,
        borderColor: "white"
        
    },
    orangeBox:{
        backgroundColor: "#F0A23B",
        left: 100
        // alignSelf: "flex-start"
        // flex: 2 // 2 + 2 + 3 = 2/8
    },
    purpleBox:{
        backgroundColor: "#4240a2",
        top: 100
        // flex: 2
        // top: -100
        // alignSelf: "flex-end"
    },
    blueBox:{
        backgroundColor: "#28C4D9",
        // flex: 3
        // top: 100
        // alignSelf: "flex-start"
    },
})