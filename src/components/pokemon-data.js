import styled from "@emotion/styled";

const PokeImg = styled.img`
max-width: 144px `

const StatsDiv = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;`

function formatId(id) {
  id = String(id);
  return id.length === 1 ? `#00${id}` : id.length === 2 ? `#0${id}` : `#${id}`
}

export function PokemonData({pokemon}) {


  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>{formatId(pokemon.id)}</p>
      <PokeImg src={pokemon.sprites.other["official-artwork"].front_default} />
      <StatsDiv>
        <p>{pokemon.weight / 10} Kg</p>
        <p>{pokemon.height / 10} m</p>
      </StatsDiv>
      <button>Mark as favorite</button>
    </div>
  )
}