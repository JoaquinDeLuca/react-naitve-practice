import { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../components/theme/global.style"
import Icon from 'react-native-vector-icons/Ionicons'
import { FAB } from "react-native-paper"



export const CounterM3Screen = () => {

    const [counter, setCounter] = useState(10)

    const handlePress = () => {
        setCounter(prev => prev + 1)
    }

  return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{counter}</Text> 

        <Icon name="airplane-outline" size={35}/>

        <FAB
          style={globalStyles.fab}
          onPress={handlePress}
          onLongPress={() => setCounter(0)}
          // label="+1"
          icon={"add"}
          // icon={() =>  <Icon name="airplane-outline" size={25}/>}
        />

    </View>
  )
}