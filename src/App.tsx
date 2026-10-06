import Pokemons from "./components/Pokemons.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Pokemon } from "./interfaces/Pokemon.ts";
import type {GraphQLPokemonResponse} from "./interfaces/GraphQLPokemonResponse.ts";

const ParentDiv = styled.div`
  width: 100vw;
  margin: 0;
`;

const SearchBarDiv = styled.div`
    display: flex;
    background-color: #17548D;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
`

const SearchBar = styled.input`
    font-size: 20px;
`

export default function App() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("dragonite");

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch(
          "https://graphqlpokemon.favware.tech/v8",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: `
              {
                getPokemon(pokemon: ${query}) {
                  num
                  species
                  sprite

                  abilities {
                    first {
                      name
                    }
                    second {
                      name
                    }
                    hidden {
                      name
                    }
                    special {
                      name
                    }
                  }

                  types {
                    name
                  }

                  baseStats {
                    hp
                    attack
                    defense
                    specialattack
                    specialdefense
                    speed
                  }
                }
              }
            `,
            }),
          }
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const json: GraphQLPokemonResponse = await response.json();

      const pokemon = json.data.getPokemon;

      const abilities = [
        pokemon.abilities.first?.name,
        pokemon.abilities.second?.name,
        pokemon.abilities.hidden?.name,
        pokemon.abilities.special?.name,
      ]
          .filter(Boolean)
          .join(", ");

      const types = pokemon.types
          .map((type) => type.name)
          .join(", ");

      const formattedPokemon: Pokemon = {
        id: pokemon.num,
        species: pokemon.species,
        sprite: pokemon.sprite,
        abilities,
        types,
        baseStats: pokemon.baseStats,
      };

      setData([formattedPokemon]);
    }

    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) =>
            console.log("There was an error: " + e.message)
        );
  }, [query]);

  return (
      <ParentDiv>
        <SearchBarDiv>
            <h2>Search</h2>
            <SearchBar value={query} onChange={(e)=>setQuery(e.target.value)}></SearchBar>
        </SearchBarDiv>
        <Pokemons data={data} />
      </ParentDiv>
  );
}