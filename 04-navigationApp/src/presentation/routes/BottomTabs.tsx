import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcons } from '../components/share/IonIcons';


const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: globalColors.background,
            }}
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },

                headerStyle: {
                    elevation: 0,
                    shadowColor: "transparent",
                },
                headerTintColor: globalColors.primary
            }}
        >
            <Tab.Screen name="Tab1" options={{ title: "One", tabBarIcon: ({ color }) => <IonIcons color={color} name='dice-outline' /> }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{ title: "Two", tabBarIcon: ({ color }) => <IonIcons color={color} name='earth-outline' /> }} component={TopTabsNavigator} />
            <Tab.Screen name="Tab3" options={{ title: "Three", tabBarIcon: ({ color }) => <IonIcons color={color} name='grid-outline' /> }} component={StackNavigator} />
        </Tab.Navigator>
    );
}