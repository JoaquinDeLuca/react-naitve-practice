import { Text, View } from 'react-native';
import { useMovies } from '../../hook/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreensLoader';

export const HomeScreen = () => {


    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPages } = useMovies();

    if (isLoading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView>

            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>


                {/* Principal */}
                <PosterCarousel movies={nowPlaying} />

                {/* Populares */}
                <HorizontalCarousel
                    movie={popular}
                    title='Populares'
                    loadNextPage={popularNextPages}
                />

                {/* Top Rated */}
                <HorizontalCarousel movie={topRated} title='Mejores calificadas' />

                {/* Proximamente */}
                <HorizontalCarousel movie={upcoming} title='Proximamente' />
            </View>

        </ScrollView>
    );
};