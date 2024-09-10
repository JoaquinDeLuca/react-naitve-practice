import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'

export const DimensionScreen = () => {

    const {height, width} = useWindowDimensions()

  return (
    <View>
        <View style={style.container}>


            <View style={{...style.box, width: width * 0.90}}></View>
            



        </View>

        <Text style={style.text}>W: {width} H: {height}</Text>
    </View>
  )
}


export const style = StyleSheet.create({
    container:{
        width: '100%',
        height: "50%",
        backgroundColor: "yellowgreen"
    },
    box:{
        backgroundColor: "orange",
        width: '50%',
        height: "50%"
    },
    text: {
        color: "black",
        fontSize: 30,
    }
})
