import { Pokemon } from "../../domain/entities/pokemon";
import { getPokemonById } from "./get-pokemon-by-id";


export const getPokemonsByIds = async (ids: number[]): Promise<Pokemon[]> => {

    try {

        const pokemonPromises: Promise<Pokemon>[] = ids.map(id => {
            return getPokemonById(id);
        })

        return Promise.all(pokemonPromises);

    } catch (error) {
        console.log("> ERROR", error);
        throw new Error(`Error get pokemon by id`)
    }
}