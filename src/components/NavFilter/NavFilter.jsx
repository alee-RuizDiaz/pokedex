import { useContext } from 'react'
import ImgFilter from '../../assets/filter.svg'
import { PokemonContext } from '../../context/PokemonContext'
import Filter from '../Filter/Filter'


const NavFilter = () => {

    const {active, setActive} = useContext(PokemonContext)

    return (
        <>
            <div>
                <div className='flex items-center gap-2 justify-start mb-10' onClick={() => setActive(!active)}>
                    <img className='w-[1.8rem] cursor-pointer' src={ImgFilter} alt="filtro"/>
                    <span className='text-[1.2rem] cursor-pointer' onClick={() => setActive(!active)}>Filtro</span>
                </div>
            </div>
            <Filter/>
        </>
    )
}

export default NavFilter