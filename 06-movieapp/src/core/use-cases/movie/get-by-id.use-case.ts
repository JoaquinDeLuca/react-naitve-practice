import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interface/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { FullMovie } from "../../entities/movie.entities";

export const getMovieByIdUseCase = async (fecher: HttpAdapter, movieid: number): Promise<FullMovie> => {
    try {
        const movie = await fecher.get<MovieDBMovie>(`/${movieid}`);

        const fullMovie = MovieMapper.fromMovieDBToEntity(movie)

        return fullMovie;

    } catch (error) {
        console.log("CATCH", error);
        throw (`Error fetching movies - ${movieid}`)
    }
}