import { Text, View } from 'react-native';
import { style } from '../../../config';
import { useProfileStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/count-store';

export const HomeScreen = () => {

    const name = useProfileStore(state => state.name)
    const email = useProfileStore(state => state.email)


    const count = useCounterStore(state => state.count)

    return (
        <View style={style.container}>
            <Text style={style.title}>{name}</Text>
            <Text style={style.title}>{email}</Text>
            <Text style={style.title}>Count: {count}</Text>
        </View>
    );
};