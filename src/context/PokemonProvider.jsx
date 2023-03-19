import { PokemonContext } from "./PokemonContext"


const PokemonProvider = ({children}) => {

    return (
        <PokemonContext.Provider value={{
            numero: 0
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider