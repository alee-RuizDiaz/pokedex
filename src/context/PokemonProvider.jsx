import { PokemonContext } from "./PokemonContext"
import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

const PokemonProvider = ({children}) => {

    const [offset, setOffset] = useState(0)
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [allPokemonts, setAllPokemonts] = useState([])

    // Utilizar custom hooks - useForms 

    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: '',
    })
    
    // Estados simplis

    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    // Llama 50 pokemones a la API

    const getPokemons = async (limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();
        
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data
        })

        const results = await Promise.all(promises)

        setAllPokemonts([
            ...allPokemonts, ...results
        ])
        setLoading(false)

    }

    // Todos los pokemones

    const getAllPokemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        
        const promises = data.results.map(async pokemon  => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data
        })

        const results = await Promise.all(promises)

        setGlobalPokemons(results)
        setLoading(false)

    }

    // Llamar a un pokemon por id

    const getPokemonById = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data

    }


    useEffect(() => {

        getPokemons()

    }, [])

    useEffect(() => {

        getAllPokemons()

    },[])

    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemonts,
            globalPokemons,
            getPokemonById
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider