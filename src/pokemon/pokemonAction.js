import axios from 'axios'
const URL = `https://pokeapi.co/api/v2/pokemon/`

export const getPokemon = async (page) => {
    
    const request = await axios.get(`${URL}?limit=1118&offset=${page * 12}`)   
        
    return {
        type: 'POKEMON_REQUEST',
        payload: request.data.results
    }
}

//new action retornando os dados por pokemon
export const getDetailPokemon = async (name) => {
    try {        
        const request = await axios.get(`${URL}${name}`)
        
        console.log('act2', request.data)    
        return {
            type: 'POKEMON_DETAILS_REQUEST',
            payload: request.data
        }
    } catch (error) {
        return console.log(error) 
    }
}