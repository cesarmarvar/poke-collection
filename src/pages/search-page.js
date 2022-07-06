import { Input } from "../components/input";
import { SearchForm, SearchContainer } from "../styles/typography";
import { MdCatchingPokemon } from "react-icons/md"
import { useState } from "react";
import { getPokemon } from "../services/pokemon-api";
import { PokemonData } from "../components/pokemon-data";
import styled from "@emotion/styled";


const SubmitButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
background: #2D9CDB;
box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
border-radius: 4px;
border: none;
color: white;
cursor: pointer;
font-family: Source Code Pro;
font-weight: 700;
:hover {
  background: #006bb3;
}
:active {
  margin-top: 3px;
  padding-top: 7px;
}`

function SearchPage() {
  const [ query, setQuery ] = useState("")
  const [ state, setState ] = useState({
    status: "idle",
    data: null,
    error: null,
  })

  const { status, data: pokemon, error } = state;

  function handleChange(event) {
    event.preventDefault();
    setQuery(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query === "") return;
    setState({ status: "pending", data: null, error: null })
    getPokemon(query)
      .then((pokemon) => {
        setState({
          status: "success",
          data: pokemon,
          error: null
        })
      })
      // .then(console.log)
      .catch(() => {
        setState({
          status: "error",
          data: null,
          error: "Pokemon not found! Please try again."
        })
      })
  }

  return(
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit} >
        <Input 
        name="query" 
        type="text" 
        value={query}
        placeholder="pokemon name"
        onChange={handleChange}
        />
        <SubmitButton>Search</SubmitButton>
      </SearchForm>
      {status != "success" ? <MdCatchingPokemon size="10rem"/> : null}
      <div>
        {status === "idle" ? "Ready to search" : null}
        {status === "pending" ? "Loading pokemon data..." : null}
        {status === "success" && (
          <PokemonData pokemon={pokemon} />
        )}
        {status === "error" ? `${error}` : null}
      </div>
    </SearchContainer>
  )
}

export default SearchPage;