import ImgFilter from '../../assets/filter.svg'
import Filter from '../Filter/Filter'


const NavFilter = () => {
    return (
        <div>
            <div className='flex items-center gap-2 justify-start mb-10'>
                <img className='w-[1.8rem] cursor-pointer' src={ImgFilter} alt="filtro" />
                <span className='text-[1.2rem]'>Filtro</span>
            </div>
        <Filter/>
        </div>
    )
}

export default NavFilter