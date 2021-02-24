import { combineReducers } from 'redux'

import PokemonReducer from '../pokemon/pokemonReducer'
import RegiaoReducer from '../regioes/regioesReducer'

const rootReducer = combineReducers({
    
    pokemon: PokemonReducer,
    regiao: RegiaoReducer
   
})

export default rootReducer