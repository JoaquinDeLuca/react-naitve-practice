import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/share';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {

    const { top } = useSafeAreaInsets(); // Para obetner el area segura en distintos sistemas ios/andro

    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 25,
                marginTop: top
            }}
        >
            <Text>ProfileScreen</Text>



            <PrimaryButton
                TextBtn='Abrir menu'
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
            />
        </View>
    );
};