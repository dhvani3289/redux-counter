
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/Actions/CounterActions";
import { Link } from "react-router-dom";

function App() {
  let count = useSelector((state) => state.counterRoot.counter);
  // console.log(count);
  let dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Link to={'/contact'}>contact</Link>

        <h1>Counter with Redux</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        {count}
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

    </>
  )
}

export default App
