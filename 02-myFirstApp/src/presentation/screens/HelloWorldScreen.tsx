import { StyleSheet, Text, View } from "react-native"


interface Props {
    name: string
}

export const HelloWorldScreen = ({name = "World"}:Props) => {
  return (
    <View style={style.container}>
        <Text style={style.title}>Hello, {name}</Text>
    </View>
  )
}


const style = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: "500"
    },
    container: {
        flex:1,
        justifyContent: "center"
    }
})