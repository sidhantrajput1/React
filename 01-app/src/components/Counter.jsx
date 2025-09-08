import React, { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="border py-2 px-5 bg-black text-white rounded"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="border py-2 px-5 bg-black text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
