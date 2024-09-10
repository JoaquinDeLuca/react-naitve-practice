import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './presentation/navigators/BottomTabNavigator';

export const App = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
};