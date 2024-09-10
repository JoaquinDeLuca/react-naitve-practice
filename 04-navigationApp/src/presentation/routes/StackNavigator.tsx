import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home';
import { ProductScreen, ProductsScreen } from '../screens/products';
import { SettingScreen } from '../screens/settings';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export type RootStackParams = {
    Home: undefined,
    Products: undefined,
    Product: { id: number, name: string },
    Setting: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                }
            }}
        >
            {/* Por defecto pinta el primer componente que tengamos en este caso home */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator >
    );
}