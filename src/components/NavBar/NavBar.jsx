import { Link } from "react-router-dom"
import Logo from '../../assets/Pokédex_logo.png'
import { BsSearch } from 'react-icons/bs'
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"

const NavBar = () => {

    const {numero} = useContext(PokemonContext)
    

    return (
        <div className="flex flex-wrap py-10 justify-between">
            <Link to={'/'}>
                <img className="w-[10rem]" src={Logo} alt="logo" />
            </Link>
            <form className="flex gap-5 p-5">
                <div className="flex items-center gap-5 border border-[#555] p-3 rounded-3xl">
                    <BsSearch className="lg:text-[1.2rem] text-[1rem] text-[#555]"/>
                    <input className="lg:w-[15rem] w-[10rem] outline-none" type="search" placeholder="Buscar nombre de pokemon"/>
                </div>
                <Link className="boder-none rounded-3xl bg-primary text-white hover:bg-primatyHover hover:text-black cursor-pointer px-5 flex items-center">Buscar</Link>
            </form>
            <Outlet/>
        </div>
    )
}

export default NavBar