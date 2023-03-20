import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { PokemonContext } from "../../../context/PokemonContext"
import CardPokemon from "../../CardPokemon/CardPokemon"

const SearchPage = () => {

    const location = useLocation()

    const {globalPokemons} = useContext(PokemonContext)

    const filterdesPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

    return (
        <div className="">
            <p className="my-5">
                Se encontraron <span>{filterdesPokemons.length}</span> resultados:
            </p>
            <div className="grid grid-cols-4 gap-5 cursor-pointer">
                {filterdesPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
            </div>
        </div>
    )
}

export default SearchPage