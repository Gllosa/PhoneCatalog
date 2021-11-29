import { PHONES_ACTIONS } from "./actions"

const initialState = []

export const phonesReducer = (state = initialState, action) => {
    switch (action.type){
        case PHONES_ACTIONS.SET_PHONES:
            return action.payload

        default:
            return state
    }
}
