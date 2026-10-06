import type {GraphQLAbilities} from "./GraphQLAbilities.ts";
import type {GraphQLType} from "./GraphQLType.ts";

export interface GraphQLPokemon {
    num: number;
    species: string;
    sprite: string;
    abilities: GraphQLAbilities;
    types: GraphQLType[];
    baseStats: BaseStats;
}
export interface BaseStats {
    hp: number;
    attack: number;
    defense: number;
    specialattack: number;
    specialdefense: number;
    speed: number;
}