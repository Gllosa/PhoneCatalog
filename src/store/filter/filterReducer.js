import { FILTER_ACTIONS } from "./actions"

const initialState = {
    alphabetic: true,
    filterText: ""
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case FILTER_ACTIONS.SET_ALPHABETIC:
            return {...state, alphabetic: action.payload}

        case FILTER_ACTIONS.SET_FILTER_TEXT:
            return {...state, filterText: action.payload}

        default:
            return state
    }
}
