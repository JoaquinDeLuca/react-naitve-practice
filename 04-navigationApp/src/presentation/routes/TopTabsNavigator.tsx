import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburMenu } from '../components/share';
import { globalColors } from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburMenu />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: globalColors.primary,
          tabBarIndicatorStyle: {
            backgroundColor: globalColors.primary
          }
        }}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
}