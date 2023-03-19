import AppRouter from "./components/AppRouter/AppRouter"
import PokemonProvider from "./context/PokemonProvider"


function App() {

  return (   
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider> 
  )
}

export default App
