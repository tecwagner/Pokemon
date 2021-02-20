import { combineReducers } from 'redux'

//criado um reducer expecifico
import PokemonReducer from '../pokemon/pokemonReducer'

//Aplicação que ira concatenar os reducer
const rootReducer = combineReducers({
    
    //Dados vindo do Back, passado  pelo reducer  (Responsavel por enviar)
    pokemon: PokemonReducer
   
})

export default rootReducer