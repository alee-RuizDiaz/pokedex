import Filter from '../../assets/filter.svg'

const NavFilter = () => {
    return (
        <div className='flex items-center gap-2 justify-start mb-10'>
            <img className='w-[1.8rem] cursor-pointer' src={Filter} alt="filtro" />
            <span className='text-[1.2rem]'>Filtro</span>
        </div>
    )
}

export default NavFilter