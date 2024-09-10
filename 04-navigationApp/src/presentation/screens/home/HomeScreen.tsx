import { type NavigationProp, useNavigation } from '@react-navigation/native';

import { View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { HamburMenu, PrimaryButton } from '../../components/share';
import { type RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <>
            <HamburMenu />
            <View style={globalStyles.container}>

                <PrimaryButton
                    TextBtn='Products'
                    onPress={() => navigation.navigate('Products')}
                />

                <PrimaryButton
                    TextBtn='Setting'
                    onPress={() => navigation.navigate('Setting')}
                />

            </View>
        </>
    );
}; 