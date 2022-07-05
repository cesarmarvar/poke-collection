import { Input } from "../components/input";
import { SearchForm, BlueButton, SearchContainer } from "../styles/typography";
import { MdCatchingPokemon } from "react-icons/md"
import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemon-api";
import { PokemonData } from "../components/pokemon-data";


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
        <button type="submit">Search</button>
      </SearchForm>
      {status != "success" ? <MdCatchingPokemon size="80px"/> : null}
      <div>
        {status === "idle" ? "Ready to search" : null}
        {status === "pending" ? "Loading pokemon data..." : null}
        {status === "success" && (
          <PokemonData pokemon={pokemon} />
        )}
      </div>
    </SearchContainer>
  )
}

export default SearchPage;