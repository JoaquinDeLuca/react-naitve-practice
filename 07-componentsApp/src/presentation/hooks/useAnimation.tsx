import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current
    const animatedTop = useRef(new Animated.Value(0)).current

    const FadeIn = ({ duration = 300, toValue = 1, callBack = () => { } }) => {

        // Animated.timing(animatedTop, {
        //     toValue: 0,
        //     duration: 600,
        //     useNativeDriver: true, // Hacelerado por hadware
        //     easing: Easing.bounce // Easing.elastic(2)
        // }).start(() => console.log("animacion top"))


        Animated.timing(animatedOpacity, {
            toValue: toValue, // de 0 a toValue = 1
            duration: duration,
            useNativeDriver: true // Hacelerado por hadware
        }).start(callBack)
    };

    const FadeOut = ({ duration = 300, toValue = 0, callBack = () => { } }) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true // Hacelerado por hadware
        }).start(callBack)

        // () => animatedTop.resetAnimation()
    };

    const startMovingTopPosition = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.linear,
        callBack = () => { }
    }) => {

        animatedTop.setValue(initialPosition) // lo pone en 0

        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easing
        }).start(callBack)

    };


    return {
        //Properties
        animatedOpacity,
        animatedTop,

        //Methods
        FadeIn,
        FadeOut,
        startMovingTopPosition
    };
};