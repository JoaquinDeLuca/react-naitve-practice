import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components/shared"
import { Button } from "react-native-paper"


export const CounterScreen = () => {

    const [counter, setCounter] = useState(10)

    const handlePress = () => {
        setCounter(prev => prev + 1)
    }

  return (
    <View style={style.container}>
        <Text style={style.title}>{counter}</Text> 
        
        {/* <PrimaryButton
            label="Increment"
            onPress={handlePress}
            onLongPress={() => setCounter(0)}
        /> */}

        <Button 
            onPress={handlePress}
            onLongPress={() => setCounter(0)}
            mode="contained"
        >
            Increment
        </Button>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 70,
        fontWeight: "300",
        textAlign: "center"
    }
})
