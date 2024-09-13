import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { PermissionsScreen } from '../screens/permissions/PermissionsScreen';
import { MapsScreen } from '../screens/maps/MapsScreen';

// Rutas que voy a tener 
export type RootStackParams = {
    LoadingScreen: undefined;
    PermissionsScreen: undefined;
    MapScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='LoadingScreen'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="MapScreen" component={MapsScreen} />
            <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        </Stack.Navigator>
    );
}