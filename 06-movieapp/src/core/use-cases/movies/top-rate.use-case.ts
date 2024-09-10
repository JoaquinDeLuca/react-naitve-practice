import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interface/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entities";




export const moviesTopRateUseCase = async (fecher: HttpAdapter): Promise<Movie[]> => {


    try {

        const topRate = await fecher.get<MovieDBResponse>("/top_rated");

        return topRate.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log(error);
        throw new Error("Error fetching movies - TopRateUseCase")
    }
}