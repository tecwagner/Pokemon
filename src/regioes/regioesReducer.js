/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */

const INITIAL_STATE = {
    list: []
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {       
        case 'POKEMON_REGION_REQUEST':
            return {
                ...state,
                list: action.payload
            }    
        default:
    }
    return state
}

