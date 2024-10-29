import { Platform } from 'react-native';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '../../infrastructure/interfaces/location';
import { FAB } from './ui/FAB';
import { useEffect, useRef, useState } from 'react';
import { useLocationStore } from '../store/location/useLocationStore';

interface Props {
    showsUserLocation?: boolean;
    initialLoaction: Location;
}

export const Map = ({ showsUserLocation = true, initialLoaction }: Props) => {


    const mapRef = useRef<MapView>();
    const cameraLocation = useRef<Location>(initialLoaction);
    const [isFollowingUser, setIsFollowingUser] = useState(true);
    const [isShowingPolyline, setIsShowingPolyline] = useState(true);
    const { getLocation, lastKnownLocation, watchLocation, clearWatchLocation, userLocationList } = useLocationStore();


    const moveCamaraToLocation = (location: Location) => {
        if (!mapRef.current) return;

        mapRef.current.animateCamera({ center: location })
    };


    const moveToCurrentLocation = async () => {
        if (!lastKnownLocation) {
            moveCamaraToLocation(initialLoaction);
        }

        const location = await getLocation();

        if (!location) return;

        moveCamaraToLocation(location)
    };


    useEffect(() => {
        watchLocation();
    
      return () => {
        clearWatchLocation();
      }
    }, [])


    // Cada vez que cambie la última ubi se va ir moviendo de acuerdo a donde este el user
    useEffect(() => {
      if(lastKnownLocation && isFollowingUser){
        moveCamaraToLocation(lastKnownLocation);
      }
    }, [lastKnownLocation, isFollowingUser])
    
    

    return (
        <>
            <MapView
                ref={(map) => mapRef.current = map!}
                showsUserLocation={showsUserLocation}
                onTouchStart={() => setIsFollowingUser(false)}
                provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex: 1 }}
                region={{
                    latitude: cameraLocation.current.latitude,
                    longitude: cameraLocation.current.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >

                {isShowingPolyline && <Polyline
                    coordinates={userLocationList}
                    strokeColor='black'
                    strokeWidth={5}
                />}

                {/* <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title='Este es el título'
                    description='Descripción del punto'
                /> */}


            </MapView>

            <FAB
                iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
                onPress={() => setIsShowingPolyline(!isShowingPolyline)}
                style={{
                    bottom: 140,
                    right: 20
                }}

            />
            <FAB
                iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
                onPress={() => setIsFollowingUser(!isFollowingUser)}
                style={{
                    bottom: 80,
                    right: 20
                }}

            />
            <FAB
                iconName='compass-outline'
                onPress={moveToCurrentLocation}
                style={{
                    bottom: 20,
                    right: 20
                }}

            />
        </>
    );
};