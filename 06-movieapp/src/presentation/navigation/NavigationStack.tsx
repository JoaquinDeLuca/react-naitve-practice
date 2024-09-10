import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home';
import { DetailScreen } from '../screens/details';


export type RootStackParams = {
    Home: undefined,
    Details: { movieId: number }
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    );
}