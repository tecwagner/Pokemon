import axios from 'axios'
const URL_REGION = `https://pokeapi.co/api/v2/region/`

export const getRegionPokemon = async () => {
    
    const request = await axios.get(`${URL_REGION}`)
    
    // console.log('act3', request)    
    return {
        type: 'POKEMON_REGION_REQUEST',
        payload: request.data
    }
}
