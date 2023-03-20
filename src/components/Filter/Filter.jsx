import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"

const Filter = () => {

    const {active, handleCheackbox} = useContext(PokemonContext)

    return (
        <div className={`flex justify-center fixed top-0  w-[15rem] text-[#555] bg-[#f2f2f2] h-full transition-all duration-[.3s] ease-linear ${active ? 'left-0' : 'left-[-19rem]'}`}>
            <div className="flex flex-col gap-5 pt-[5rem]">
                <span className="font-bold text-2xl">Tipo</span>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='grass'
                        id='grass'
                    />
                    <label htmlFor='grass'>Planta</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='fire'
                        id='fire'
                    />
                    <label htmlFor='fire'>Fuego</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='bug'
                        id='bug'
                    />
                    <label htmlFor='bug'>Bicho</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='fairy'
                        id='fairy'
                    />
                    <label htmlFor='fairy'>Hada</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='dragon'
                        id='dragon'
                    />
                    <label htmlFor='dragon'>Dragón</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='shadow'
                        id='shadow'
                    />
                    <label htmlFor='shadow'>Fantasma</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='ground'
                        id='ground'
                    />
                    <label htmlFor='ground'>Tierra</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='normal'
                        id='normal'
                    />
                    <label htmlFor='normal'>Normal</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='psychic'
                        id='psychic'
                    />
                    <label htmlFor='psychic'>Psíquico</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='steel'
                        id='steel'
                    />
                    <label htmlFor='steel'>Acero</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='dark'
                        id='dark'
                    />
                    <label htmlFor='dark'>Siniestro</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='electric'
                        id='electric'
                    />
                    <label htmlFor='electric'>Eléctrico</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='fighting'
                        id='fighting'
                    />
                    <label htmlFor='fighting'>Lucha</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='flying'
                        id='flying'
                    />
                    <label htmlFor='flying'>Volador</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='ice'
                        id='ice'
                    />
                    <label htmlFor='ice'>Hielo</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='poison'
                        id='poison'
                    />
                    <label htmlFor='poison'>Veneno</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='rock'
                        id='rock'
                    />
                    <label htmlFor='rock'>Roca</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheackbox}
                        name='water'
                        id='water'
                    />
                    <label htmlFor='water'>Agua</label>
                </div>
            </div>
        </div>
    )
}

export default Filter