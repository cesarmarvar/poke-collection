import styled from "@emotion/styled";
import { GiWeight } from "react-icons/gi";
import { FaRulerVertical } from "react-icons/fa";
import { pokemonTypeColor } from "../styles/pokemon-types";
import { FavoriteButton } from "./favorite-button";

const PokeData = styled.p`
margin: 0px;
padding: 0px;`

const PokeImg = styled.img`
max-width: 144px `

const Stats = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;`

const StatsContainer = styled.div`
display: flex;
flex-direction: row;
gap: 0.3rem;`


function formatId(id) {
  id = String(id);
  return id.length === 1 ? `#00${id}` : id.length === 2 ? `#0${id}` : `#${id}`
}

export function PokemonData({pokemon}) {


  return (
    <div>
      <h1>{pokemon.name}</h1>
      <h2 style={{textAlign: "center"}}>{formatId(pokemon.id)}</h2>
      <PokeImg src={pokemon.sprites.other["official-artwork"].front_default} />
        {pokemon.types.map((e) => {
          return (<p key={e.slot}>{e.type.name}</p>)
      })}
      <Stats>
        <StatsContainer>
          <GiWeight />
          <PokeData>{pokemon.weight / 10} Kg</PokeData>
        </StatsContainer>
        <StatsContainer>
          <FaRulerVertical />
          <PokeData>{pokemon.height / 10} m</PokeData>
        </StatsContainer>
      </Stats><br />
      <FavoriteButton>Mark as favorite</FavoriteButton>
    </div>
  )
}