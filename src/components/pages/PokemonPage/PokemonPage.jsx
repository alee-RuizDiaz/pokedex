import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PokemonContext } from "../../../context/PokemonContext"
import Loader from '../../Loader/Loader'

const PokemonPage = () => {

    const {getPokemonById} = useContext(PokemonContext)

    const [loading, setLoagin] = useState(true)
    const [pokemon, setPokemon] = useState({})

    const {id} = useParams()

    const fetchPokemon = async(id) => {
        const data = await getPokemonById(id)
        setPokemon(data)
        setLoagin(false)
    }

    useEffect(() => {
        fetchPokemon(id)
    },[])

    return (
        <div className="flex flex-col mb-10">
            {
                loading ? (
                    <Loader/>
                ) : (
                    <>
                        <div className="flex items-center relative">
                            <span className="absolute top-[-3rem] text-[8rem] text-primary">#{pokemon.id}</span>
                            <div className=" order-2 flex-1 p-10">
                                <img className="w-full"
                                src={pokemon.sprites.other.dream_world.front_default}
                                alt={`Pokemon ${pokemon?.name}`}/>
                            </div>
                            <div className="flex flex-col order-1 flex-1">
                                <h1 className="text-right text-[3rem]">{pokemon.name.toUpperCase()}</h1>
                                <div className="flex gap-5 mt-5">
                                    {pokemon.types.map(type => (
                                        <span key={type.type.name} className={`${type.type.name} px-3 py-2 rounded-2xl`}>
                                            {type.type.name.toUpperCase()}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-5">
                                    <div className='group-info'>
                                        <p>Altura</p>
                                        <span>{pokemon.height}</span>
                                    </div>
                                    <div className='group-info'>
                                        <p>Peso</p>
                                        <span>{pokemon.weight}KG</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 justify-center">
                            <h1>Estadisticas</h1>
                            <div className="flex flex-col gap-5 flex-1">
                                <div className="flex items-center gap-5">
                                    <span>Hp</span>
                                    <div className='w-full h-[1.5rem] bg-primary rounded-3xl'></div>
								<span className='flex-[10%]'>
									{pokemon.stats[0].base_stat}
								</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <span>Attack</span>
                                    <div className="w-full h-[1.5rem] bg-primary rounded-3xl"></div>
                                    <span className="flex-[10%]">
                                    {pokemon.stats[1].base_stat}
                                    </span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <span>Defense</span>
                                    <div className="w-full h-[1.5rem] bg-primary rounded-3xl"></div>
                                    <span className="flex-[10%]">
                                    {pokemon.stats[2].base_stat}
                                    </span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <span>Special Attack</span>
                                    <div className="w-full h-[1.5rem] bg-primary rounded-3xl"></div>
                                    <span className="flex-[10%]">
                                    {pokemon.stats[3].base_stat}
                                    </span>
                                </div>
                                <div className="flex items-start gap-5">
                                    <span>Special Defense</span>
                                    <div className="w-full h-[1.5rem] bg-primary rounded-3xl"></div>
                                    <span className="flex-[10%]">
                                    {pokemon.stats[4].base_stat}
                                    </span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <span>Speed</span>
                                    <div className="w-full h-[1.5rem] bg-primary rounded-3xl"></div>
                                    <span className="flex-[10%]">
                                    {pokemon.stats[5].base_stat}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default PokemonPage