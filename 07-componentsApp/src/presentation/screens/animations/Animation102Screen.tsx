import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;
    const { colors } = useContext(ThemeContext);


    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
            ).start();
        },
    });


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#61dafb',
        width: 100,
        height: 100,
        borderRadius: 4,
    },
});