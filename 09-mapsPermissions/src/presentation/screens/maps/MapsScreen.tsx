import { StyleSheet, View } from 'react-native';
import { Map } from '../../components/Map';
import { useLocationStore } from '../../store/location/useLocationStore';
import { LoadingScreen } from '../loading/LoadingScreen';
import { useEffect } from 'react';

export const MapsScreen = () => {

    const { getLocation, lastKnownLocation } = useLocationStore();


    useEffect(() => {
        if (lastKnownLocation === null) {
            getLocation();
        }
    }, [])


    if (lastKnownLocation === null) {
        return (<LoadingScreen />)
    }

    return (
        <View style={styles.container}>
            <Map
                initialLoaction={lastKnownLocation}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});