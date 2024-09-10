import { Pressable, Text, View } from 'react-native';
import { style } from '../../../config';
import { useCounterStore } from '../../store/count-store';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const SettingScreen = () => {

    const incrementBy = useCounterStore(state => state.incrementBy)
    const decrementBy = useCounterStore(state => state.decrementBy)
    const count = useCounterStore(state => state.count)

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: `Count ${count}`
        })
    }, [count])


    return (
        <View style={style.container}>
            <Text style={style.title}>Count: {count}</Text>




            <Pressable
                onPress={() => incrementBy(1)}
                style={style.primaryBtn}
            >
                <Text style={style.textBtn}>+1</Text>
            </Pressable>

            <Pressable
                onPress={() => decrementBy(1)}
                style={style.primaryBtn}
            >
                <Text style={style.textBtn}>-1</Text>
            </Pressable>
        </View>
    );
};