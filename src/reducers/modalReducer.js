const initialState = false

export const modalReducer = (state = initialState, action) => {
    switch (action.type){
        case 'modal/toggleModal':
            return !state
        
        case 'modal/setShowModal':
            return action.payload

        default:
            return state
    }
}

export const toggleModal = () =>{
    return {
        type: 'modal/toggleModal'
    }
}

export const setShowModal = (showModal) =>{
    return {
        type: 'modal/setShowModal',
        payload: showModal
    }
}
