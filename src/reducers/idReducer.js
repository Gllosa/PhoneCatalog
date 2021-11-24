const initialState = null

export const idReducer = (state = initialState, action) => {
    switch (action.type){
        case 'id/onChange':
            return action.payload

        default:
            return state
    }
}

export const updateId = (id) =>{
    return {
        type: 'id/onChange',
        payload: id,
    }
}
