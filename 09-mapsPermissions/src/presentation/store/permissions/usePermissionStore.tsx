import { create } from "zustand";
import { PermissionStatus } from "../../../infrastructure/interfaces/permission";
import { checkLocationPermission, requestLocationPermissions } from "../../../actions/permissions/location";

interface PermissionState {
    locationStatus: PermissionStatus;

    // methods
    requestLocationPermission: () => Promise<PermissionStatus>;
    checkLocationPermission: () => Promise<PermissionStatus>;
}



export const usePermissionStore = create<PermissionState>()(set => ({
    locationStatus: 'undetermined',
    requestLocationPermission: async () => {
        const status = await requestLocationPermissions();

        set({ locationStatus: status });

        return status
    },
    checkLocationPermission: async () => {
        const status = await checkLocationPermission();

        set({ locationStatus: status });

        return status
    }
}))
