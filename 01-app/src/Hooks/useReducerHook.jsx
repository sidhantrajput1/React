import React, { useReducer } from "react";

function useReducerHook() {
  const reducer = (state, action) => {
    // console.log(state);

    if (action.type === "increment") {
        return state + 1;
    } else if (action.type === 'decrement'){
        return state - 1;
    }  else {
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="border p-4">
      <h1>Count : {count}</h1>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="border py-2 px-5"
      >
        decrement
      </button>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="border py-2 px-5"
      >
        Increment
      </button>
    </div>
  );
}

export default useReducerHook;
