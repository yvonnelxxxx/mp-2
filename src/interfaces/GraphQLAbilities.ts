import type {GraphQLAbility} from "./GraphQLAbility.ts";
export interface GraphQLAbilities {
    first: GraphQLAbility;
    second: GraphQLAbility | null;
    hidden: GraphQLAbility | null;
    special: GraphQLAbility | null;
}