const initialState = {
    alphabetic: true,
    filterText: ""
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case 'filter/setAlfabetic':
            return {...state, alphabetic: action.payload}

        case 'filter/setFilterText':
            return {...state, filterText: action.payload}

        default:
            return state
    }
}

export const setAlphabetic = (alphabetic) =>{
    return {
        type: 'filter/setAlfabetic',
        payload: alphabetic
    }
}

export const setFilterText = (text) => {
    return {
        type: 'filter/setFilterText',
        payload: text
    }
}
