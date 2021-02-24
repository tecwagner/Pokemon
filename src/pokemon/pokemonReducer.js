/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */

const INITIAL_STATE = {
    result: [],
    details: '',
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'POKEMON_REQUEST':
            return {
                ...state,
                result: action.payload
            }
        case 'POKEMON_DETAILS_REQUEST':
            return {
                ...state,
                details: action.payload
            }
    }
    return state
}

