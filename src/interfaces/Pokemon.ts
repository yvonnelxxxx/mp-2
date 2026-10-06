import type {BaseStats} from "./GraphQLPokemon.ts";
export interface Pokemon{
    id: number;
    sprite: string;
    species: string;
    abilities: string;
    types: string;
    baseStats: BaseStats;
}