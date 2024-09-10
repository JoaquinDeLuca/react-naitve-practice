import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/share';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingScreen = () => {

    const navigator = useNavigation()

    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 20 }}>Setting Screen</Text>


            <PrimaryButton
                TextBtn='Regresar'
                onPress={() => navigator.goBack()}
            />
            <PrimaryButton
                TextBtn='Regresar al home'
                onPress={() => navigator.dispatch(StackActions.popToTop())}
            />
        </View>
    );
};



