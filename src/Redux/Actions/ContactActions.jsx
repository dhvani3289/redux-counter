import { ADD_CONTACT } from "../ActionType";

export const contactDetails = (data) => {
    return {
        type: ADD_CONTACT,
        payload: data
    }
}