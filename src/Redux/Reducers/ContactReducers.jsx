import { ADD_CONTACT } from "../ActionType";

let getContact = JSON.parse(localStorage.getItem("contact"));

const initialValue = {
    contact: getContact ? getContact : []
}

export const ContactReducers = (state = initialValue, action) => {
    console.log("state", state);

    switch (action.type) {
        case ADD_CONTACT:
            let setContact = [...state.contact, action.payload];
            localStorage.setItem("contact", JSON.stringify(setContact))
            return {
                ...state, contact: [setContact]
            }

        default:
            return state;
    }
}