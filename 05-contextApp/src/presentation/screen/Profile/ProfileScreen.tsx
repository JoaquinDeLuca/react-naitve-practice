import { Pressable, Text, View } from 'react-native';
import { style } from '../../../config';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {

    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const changeProfile = useProfileStore(state => state.changeProfile)

    return (
        <View style={style.container}>
            <Text style={style.title}>{name}</Text>
            <Text style={style.title}>{email}</Text>


            <Pressable
                onPress={() => useProfileStore.setState({ name: 'Marta Sanchez' })}
                style={style.primaryBtn}
            >
                <Text style={style.textBtn}>Cambiar Nombre</Text>
            </Pressable>

            <Pressable
                onPress={() => useProfileStore.setState({ email: 'martasanchez@gmail.com' })}
                style={style.primaryBtn}
            >
                <Text style={style.textBtn}>Cambiar Email</Text>
            </Pressable>


            <Pressable
                onPress={() => changeProfile('Pepe', 'pepe@gmail.com')}
                style={style.primaryBtn}
            >
                <Text style={style.textBtn}>Volver al inicial</Text>
            </Pressable>
        </View>
    );
};