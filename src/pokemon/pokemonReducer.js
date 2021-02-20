/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */

const INITIAL_STATE = {
    result: []
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'POKEMON_REQUEST':
            return {
                ...state,
                result: action.payload
            }
    }
    return state
}

