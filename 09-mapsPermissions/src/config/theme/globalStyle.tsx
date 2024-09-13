import { StyleSheet } from "react-native";


export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnPrimary: {
        backgroundColor: '#694d9b',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 100,
        margin: 10,
        color: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: "400",
        margin: 10,
        color: 'black',
        letterSpacing: 1.5
    },
    text: {
        color: 'black',
        fontSize: 16,
        margin: 10,
    }
});