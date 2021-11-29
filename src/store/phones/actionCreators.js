import { PHONES_ACTIONS } from "./actions"

export const setPhones = (phones) =>{
    return {
        type: PHONES_ACTIONS.SET_PHONES,
        payload: phones,
    }
}
