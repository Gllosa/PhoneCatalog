const initialState = []

export const phonesReducer = (state = initialState, action) => {
    switch (action.type){
        case 'phones/setPhones':
            return action.payload

        default:
            return state
    }
}

export const setPhones = (phones) =>{
    return {
        type: 'phones/setPhones',
        payload: phones,
    }
}
