import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileScreen } from "../screens/profile";
import { globalColors } from "../theme/theme";
import { View, useWindowDimensions, } from "react-native";
import { BottomTabs } from "./BottomTabs";
import { IonIcons } from "../components/share/IonIcons";


const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {


    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomContentDrawer {...props} />} // Para pasar un componente personalizado
            screenOptions={{
                headerShown: false,
                drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide', // Tipo de animacion del drawer

                drawerActiveBackgroundColor: globalColors.primary, // bg tab activo
                drawerActiveTintColor: 'white', // text color tab activo
                drawerInactiveTintColor: globalColors.primary, // items inactivos color
                drawerItemStyle: {
                    borderRadius: 12,
                    paddingHorizontal: 10
                }
            }}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{ drawerIcon: ({ focused, color }) => <IonIcons name="folder-outline" color={focused ? "white" : color} size={20} /> }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ drawerIcon: ({ focused, color }) => <IonIcons name="flame-outline" color={focused ? "white" : color} size={20} /> }}
            />
        </Drawer.Navigator>
    );
};


const CustomContentDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View
                style={{
                    backgroundColor: globalColors.dark,
                    borderRadius: 100,
                    height: 150,
                    width: 150,
                    marginHorizontal: "auto",
                    marginVertical: 30,
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <IonIcons name='person-circle-outline' color="white" size={100} />
            </View>


            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
};