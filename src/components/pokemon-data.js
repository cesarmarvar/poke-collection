import styled from "@emotion/styled";
import { GiWeight } from "react-icons/gi";
import { FaRulerVertical } from "react-icons/fa";
import { pokemonTypeColor } from "../styles/pokemon-types";
import { FavoriteButton } from "./favorite-button";

const SearchContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

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

const SingleType = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: white;
padding: 2px 1.3rem;
width: 46px;
height: 20px;
border-radius: 10px;
font-weight: 700;
font-size: 15px;
`

const TypeContainer = styled.div`
display: flex;
flex-direction: row;
gap: 0.5rem;
justify-content: center;
padding: 0.6rem 0px;`

function formatId(id) {
  id = String(id);
  return id.length === 1 ? `#00${id}` : id.length === 2 ? `#0${id}` : `#${id}`
}

export function PokemonData({pokemon}) {

  function handleFavoriteClick(e) {
    
  }

  return (
    <SearchContainer>
      <h1 style={{margin: "0"}}>{pokemon.name}</h1>
      <h2 style={{margin: "4px"}}>{formatId(pokemon.id)}</h2>
      <PokeImg src={pokemon.sprites.other["official-artwork"].front_default} />
      <TypeContainer>
        {pokemon.types.map((e) => {
          return (<SingleType style={{backgroundColor: `${pokemonTypeColor[e.type.name]}`}} key={e.slot}>{e.type.name}</SingleType>)
      })}
      </TypeContainer>
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
      <FavoriteButton onClick={handleFavoriteClick}>Mark as favorite</FavoriteButton>
    </SearchContainer>
  )
}