import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string,
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}:Props) => {

  return (
    <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={({ pressed} ) => [
            style.button,
            pressed && style.buttonPressed
        ]}
    >
        <Text>{label}</Text>
         
    </Pressable>
  )
}


const style = StyleSheet.create({
    button:{
        backgroundColor: "#5856D6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: "#4746AB"
    }
})
