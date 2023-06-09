import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import CardPokemon  from '../CardPokemon/CardPokemon'
import Loader from '../Loader/Loader'

const PokemonList = () => {

  const {allPokemonts, loading, filterPokemons} = useContext(PokemonContext)

  return (
    <>
      {
        loading ? (
          <Loader/>
        ) : (
          <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 cursor-pointer'>
            {
              filterPokemons.length ? (
                <>
                  {filterPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
                </>
              ) : (
                <>
                  {allPokemonts.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
                </>
              )
            }
            
          </div>
        )
      }
    </>
  )
}

export default PokemonList