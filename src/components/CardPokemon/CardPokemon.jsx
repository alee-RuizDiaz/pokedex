import React from 'react'
import { Link } from "react-router-dom"

const CardPokemon = ({ pokemon }) => {
  return (
      <Link to={`/pokemon/${pokemon.id}`} className='cursor-pointer '>
        <div class=" bg-gris flex items-center justify-self-center rounded-xl h-[12rem]">
          <img className='h-full w-full'
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <div className='p-5'>
          <span className=''>N° {pokemon.id}</span>
          <h3 className='my-1'>{pokemon.name.toUpperCase()}</h3>
          <div className='flex gap-5'>
            {
              pokemon.types.map(type => (
                <span key={type.type.name} className={` rounded-xl px-5 py-1 ${type.type.name}`}>
                  {type.type.name}
                </span>
              ))
            }
          </div>
        </div>
      </Link>    
  )
}

export default CardPokemon