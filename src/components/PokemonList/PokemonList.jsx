import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import CardPokemon  from '../CardPokemon/CardPokemon'

const PokemonList = () => {

  const {allPokemonts} = useContext(PokemonContext)

  return (
    <div className='grid grid-cols-4 gap-5 cursor-pointer'>
      {allPokemonts.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
    </div>
  )
}

export default PokemonList