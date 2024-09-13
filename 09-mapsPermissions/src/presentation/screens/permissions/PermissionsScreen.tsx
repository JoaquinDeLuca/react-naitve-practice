import { Pressable, Text, View } from 'react-native';
import { globalStyle } from '../../../config/theme/globalStyle';
import { usePermissionStore } from '../../store/permissions/usePermissionStore';

export const PermissionsScreen = () => {

    const { locationStatus, requestLocationPermission } = usePermissionStore();

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title}>Habilitar ubicación</Text>


            <Pressable
                style={({ pressed }) => ([
                    globalStyle.btnPrimary,
                    {
                        opacity: pressed ? 0.9 : 1,
                    }
                ])}
                onPress={requestLocationPermission}
            >
                <Text style={{ fontSize: 17 }}>Habilitar localización</Text>
            </Pressable>

            <Text style={globalStyle.text}>Estado actual: {locationStatus}</Text>
        </View>
    );
};