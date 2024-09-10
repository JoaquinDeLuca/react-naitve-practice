import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure/interface/movie-db.response";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entities";



export const getMovieCastUseCase = async (fecher: HttpAdapter, movieid: number): Promise<Cast[]> => {
    try {
        const { cast } = await fecher.get<MovieDBCastResponse>(`/${movieid}/credits`);

        const actors = cast.map(actor => CastMapper.fromMovieDBResultToEntity(actor));

        return actors;

    } catch (error) {
        console.log("CATCH", error);
        throw new Error(`Error fetching movies - ${movieid}`)
    }
}