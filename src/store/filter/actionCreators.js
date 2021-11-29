import { FILTER_ACTIONS } from "./actions"


export const setAlphabetic = (alphabetic) =>{
    return {
        type: FILTER_ACTIONS.SET_ALPHABETIC,
        payload: alphabetic
    }
}

export const setFilterText = (text) => {
    return {
        type: FILTER_ACTIONS.SET_FILTER_TEXT,
        payload: text
    }
}
