import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation';
import { useMovie } from '../../hook/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreensLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

export const DetailScreen = ({ navigation, route }: Props) => {

    const { movieId } = route.params

    const { isLoading, movie, cast = [] } = useMovie(movieId);

    if (isLoading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView>
            {/* Header */}
            <MovieHeader movie={movie!} />

            {/* Details */}
            <MovieDetails movie={movie!} cast={cast} />
        </ScrollView>
    );
};