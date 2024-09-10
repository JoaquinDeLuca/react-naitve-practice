import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entities";

import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

let popularPage = 1;

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);


    useEffect(() => {

        initialLoad();

    }, [])


    const initialLoad = async () => {

        const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(movieDBFetcher)
        const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher)
        const topRatedPromise = await UseCases.moviesTopRateUseCase(movieDBFetcher)
        const upcomingPromise = await UseCases.moviesUpcommingUseCase(movieDBFetcher)


        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])


        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setIsLoading(false);
    }



    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,


        // Methods
        popularNextPages: async () => {
            popularPage++;

            const popularMovie = await UseCases.moviesPopularUseCase(movieDBFetcher,
                { page: popularPage }
            )

            setPopular(prev => [...prev, ...popularMovie])
        }
    };
};