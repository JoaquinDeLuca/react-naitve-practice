import { ActivityIndicator, View } from 'react-native';
import { globalStyle } from '../../../config/theme/globalStyle';

export const LoadingScreen = () => {
    return (
        <View style={globalStyle.container}>
            <ActivityIndicator size={40} color={"black"} />
        </View>
    );
};