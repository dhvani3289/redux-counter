import { INCREMENT, DECREMENT } from "../ActionType";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

