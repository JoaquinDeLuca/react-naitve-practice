import { check, openSettings, PERMISSIONS, request, PermissionStatus as RNPermissionsStatus } from "react-native-permissions";
import { PermissionStatus } from "../../infrastructure/interfaces/permission";
import { Platform } from "react-native";


// Preguntar al usuarios si me da permisos de ubicación
export const requestLocationPermissions = async (): Promise<PermissionStatus> => {

    let status: RNPermissionsStatus = 'unavailable';


    if (Platform.OS === 'ios') {
        status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else if (Platform.OS === 'android') {
        status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    } else {
        throw new Error("Unsupported plaform")
    }


    if (status === 'blocked') {
        await openSettings(); // Abre los setting para que usuarios habilite manualmente los permissions
        return await checkLocationPermission();
    }

    const permissionMapper: Record<RNPermissionsStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        unavailable: 'unavailable',
        limited: 'limited'
    }

    return permissionMapper[status] ?? 'unavailable';

}

// Chequeo/verificar si tengo acceso de ubicación, sin lanzar el pop pup. Así es el caso de arriba
export const checkLocationPermission = async (): Promise<PermissionStatus> => {

    let status: RNPermissionsStatus = 'unavailable';

    if (Platform.OS === 'ios') {
        status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else if (Platform.OS === 'android') {
        status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    } else {
        throw new Error("Unsupported plaform")
    }

    const permissionMapper: Record<RNPermissionsStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        unavailable: 'unavailable',
        limited: 'limited'
    }

    return permissionMapper[status] ?? 'unavailable';
}