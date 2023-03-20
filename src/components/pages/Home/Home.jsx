import { useContext } from 'react'
import { PokemonContext } from '../../../context/PokemonContext'
import NavFilter from '../../NavFilter/NavFilter'
import PokemonList from '../../PokemonList/PokemonList'


const Home = () => {

    const {onClickLoadMore} = useContext(PokemonContext)

    return (
        <div>
            <NavFilter/>
            <PokemonList/>
            <div className='flex justify-center items-center my-10'>
                <button onClick={onClickLoadMore} className='bg-primary text-white rounded-3xl py-2 px-8 hover:bg-primatyHover hover:text-black'>
                    Cargar más
                </button>
            </div>
        </div>
    )
}

export default Home