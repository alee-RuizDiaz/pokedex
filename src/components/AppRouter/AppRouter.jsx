import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import NavFilter from '../NavFilter/NavFilter'
import Home from '../pages/Home/Home'
import PokemonPage from '../pages/PokemonPage/PokemonPage'
import SearchPage  from '../pages/SearchPage/SearchPage'

const AppRouter = () => {
    return (
        <div className='lg:p-5 px-[2rem] lg:px-[20rem]'>
            <NavBar/>
            <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/pokemon/:id' element={<PokemonPage/>}/>
                    <Route path='/search' element={<SearchPage/>}/>
                    <Route path='*' element={<Navigate to={"/"}/>}/>     
            </Routes>
        </div>
    )
}

export default AppRouter