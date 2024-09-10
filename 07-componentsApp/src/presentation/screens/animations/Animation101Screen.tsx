import { Animated, Easing, StyleSheet, View } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../../components';

export const Animation101Screen = () => {

    const { animatedOpacity, animatedTop, FadeIn, FadeOut, startMovingTopPosition } = useAnimation()

    const { colors } = useContext(ThemeContext);


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Animated.View
                style={[
                    styles.purpleBox,
                    {
                        opacity: animatedOpacity,
                        transform: [{
                            translateY: animatedTop
                        }],
                        backgroundColor: colors.primary,


                    }
                ]}
            />

            <Button
                onPress={() => {
                    FadeIn({}),
                        startMovingTopPosition({
                            initialPosition: -100,
                            easing: Easing.elastic(1),
                            duration: 600
                        })
                }}
                style={{ marginTop: 10 }}
                text='FadeIn'
            >
            </Button>
            <Button
                onPress={() => FadeOut({})}
                style={{ marginTop: 10 }}
                text='FadeOut'
            >
            </Button>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    purpleBox: {
        width: 150,
        height: 150,
    }
});