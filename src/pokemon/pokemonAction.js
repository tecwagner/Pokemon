import axios from 'axios'
const URL = `https://pokeapi.co/api/v2/pokemon/`

export const getPokemon = async (page) => {
    
    const request = await axios.get(`${URL}?limit=1500&offset=${page * 12}`)
    console.log('act', request)
    
    
    return {
        type: 'POKEMON_REQUEST',
        payload: request.data.results
    }
}

//new action retornando os dados por pokemon