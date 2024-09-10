import { View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entities';
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ movies, height = 440 }: Props) => {
    return (
        <View style={{ height }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {movies.map((movie: Movie) => <MoviePoster movie={movie} key={movie.id} />)}
            </ScrollView>
        </View>
    );
};