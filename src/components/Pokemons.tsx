import styled from "styled-components";
import type {Pokemon} from "../interfaces/Pokemon.ts";

const AllPokesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #d10023;
`;

const SinglePokeDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 40%;
    padding: 2%;
    margin: 1%;
    background-color: black;
    border: 30px #d6d6d6 solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
    align-items: center;
`;
const Pokename = styled.h2`
    font-family: "Press Start 2P", system-ui;
`;
const Img = styled.img`
    width: 300px;
    max-width: 100%;
    height: 200px;
    object-fit: contain;
    margin-top: 10px;
`;
const StatsDiv = styled.div`
    width: 100%;
    margin-top: 12px;
    font-family: "Press Start 2P", system-ui;
`;

export default function Pokemons(props : { data:Pokemon[] } ){
    return (
        <AllPokesDiv >
            {
                props.data.map((poke: Pokemon) =>
                    <SinglePokeDiv key={poke.id}>
                        <Pokename>{poke.species}</Pokename>
                        <p>Type: {poke.types}</p>
                        <p>Abilities: {poke.abilities}</p>
                        <Img src={poke.sprite} alt={`image of ${poke.species}`} />
                        <StatsDiv>
                            <p>HP: {poke.baseStats.hp}</p>
                            <p>Attack: {poke.baseStats.attack}</p>
                            <p>Defense: {poke.baseStats.defense}</p>
                            <p>Sp.Atk: {poke.baseStats.specialattack}</p>
                            <p>Sp.Def: {poke.baseStats.specialdefense}</p>
                            <p>Speed: {poke.baseStats.speed}</p>
                        </StatsDiv>
                    </SinglePokeDiv>
                )
            }
        </AllPokesDiv>
    );
}