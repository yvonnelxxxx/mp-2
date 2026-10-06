import type {GraphQLPokemon} from "./GraphQLPokemon.ts";
export interface GraphQLPokemonResponse {
    data: {
        getPokemon: GraphQLPokemon;
    };
}