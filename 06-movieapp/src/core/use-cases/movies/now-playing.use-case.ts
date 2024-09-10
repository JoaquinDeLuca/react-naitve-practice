import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interface/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entities";




export const moviesNowPlayingUseCase = async (fecher: HttpAdapter): Promise<Movie[]> => {


    try {

        const nowPlaying = await fecher.get<NowPlayingResponse>("/now_playing");

        if (!nowPlaying) {
            throw new Error("Error algo salio mal");
        }

        return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log("CATCH", error);
        throw ("Error fetching movies - nowPlaying")
    }
}