
import { DECREMENT, INCREMENT } from "../ActionType";

let getCount = JSON.parse(localStorage.getItem("counter"));

const initialValue = {
    counter: getCount ? getCount : 0
}

export const CounterReducer = (state = initialValue, action) => {
    // console.log(state); {counter: 0}
    // console.log(action);   {type: '@@redux/INITj.9.a.p.w.s'}

    let setCount;

    switch (action.type) {
        case INCREMENT:
            setCount = state.counter + 1;
            localStorage.setItem("counter", JSON.stringify(setCount));
            return { ...state, counter: setCount };
        case DECREMENT:
            setCount = state.counter - 1;
            localStorage.setItem("counter", JSON.stringify(setCount));
            return { ...state, counter: setCount };
        default:
            return state;
    }
}
