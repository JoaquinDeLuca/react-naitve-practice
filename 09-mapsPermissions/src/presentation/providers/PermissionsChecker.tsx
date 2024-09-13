import { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';
import { usePermissionStore } from '../store/permissions/usePermissionStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/StackNavigator';

export const PermissionsChecker = ({ children }: PropsWithChildren) => {

    const { locationStatus, checkLocationPermission } = usePermissionStore();
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        if (locationStatus === 'granted') {
            navigation.reset({ routes: [{ name: 'MapScreen' }] }) // Para que no pueda regresar a la pantalla anterios tipo un replace
        } else if (locationStatus !== 'undetermined') {
            navigation.reset({ routes: [{ name: 'PermissionsScreen' }] })
        }
    }, [locationStatus])



    // Este sería para cuando inicia o monta el componente
    useEffect(() => {
        checkLocationPermission();
    }, [])


    // Si hay cambio de AppState(change) en la app, chequeo que el status de la location.
    useEffect(() => {
        const suscription = AppState.addEventListener("change", (nextAppState) => {
            if (nextAppState === 'active') {
                checkLocationPermission();
            }
        })

        return () => {
            suscription.remove();
        }
    }, [])


    return (
        <>
            {children}
        </>
    );
};