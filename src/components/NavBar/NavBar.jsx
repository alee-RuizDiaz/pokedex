import { Link, useNavigate, Outlet } from "react-router-dom"
import Logo from '../../assets/Pokédex_logo.png'
import { BsSearch } from 'react-icons/bs'
import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"

const NavBar = () => {

    const {onInputChange, valueSearch, onResetForm } = useContext(PokemonContext)
    
    const navigate = useNavigate()

    const onSearchSubmit = (e) => {
        e.preventDefault()
        navigate('/search', {
            state: valueSearch
            
        })      

        onResetForm

    }

    return (
        <div className="flex flex-wrap py-10 lg:justify-between justify-center">
            <Link to={'/'}>
                <img className="w-[10rem]" src={Logo} alt="logo" />
            </Link>
            <form className="flex gap-5 p-5" onSubmit={onSearchSubmit}>
                <div className="flex items-center gap-5 border border-[#555] p-3 rounded-3xl">
                    <BsSearch className="lg:text-[1.2rem] text-[1rem] text-[#555]"/>
                    <input className="lg:w-[15rem] w-[10rem] outline-none"                       
                        type="search"
                        name="valueSearch"
                        id=''
                        value={valueSearch}
                        onChange={onInputChange}    
                        placeholder="Buscar nombre de pokemon"
                    />
                </div>
                <Link onClick={onSearchSubmit} className="boder-none rounded-3xl bg-primary text-white hover:bg-primatyHover hover:text-black cursor-pointer px-5 flex items-center">Buscar</Link>
            </form>
            <Outlet/>
        </div>
    )
}

export default NavBar