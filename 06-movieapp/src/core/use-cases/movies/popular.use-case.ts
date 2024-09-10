import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interface/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entities";


interface Options {
    page?: number;
    limit?: number;
}


export const moviesPopularUseCase = async (fecher: HttpAdapter, options?: Options): Promise<Movie[]> => {


    try {
        const popular = await fecher.get<MovieDBResponse>("/popular",
            {
                page: options?.page ?? 1
            }
        );

        return popular.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log(error);
        throw new Error("Error fetching movies - PopularUseCase")
    }
}