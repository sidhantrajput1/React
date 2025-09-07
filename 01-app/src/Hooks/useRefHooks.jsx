import React, { useRef } from "react";



/**
 UseRef : useRef is a React Hook that gives you a persistent reference to a value or DOM element.

useRef : countRef.current changes, but the UI does not re-render — perfect for storing values like timers, previous state, or mutable data.

 */

const UseRefHooks = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Counter />
    </div>
  );
};

export default UseRefHooks;
/*
function Counter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const Increment = () => {
    countRef.current += 1;
    console.log("Count (not causing re-render): ", countRef.current);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">useRef Counter</h2>

      <p className="text-lg font-medium text-gray-600 mb-2">
        Render Count: <span className="font-bold text-blue-600">{renderCount}</span>
      </p>

      <p ref={countRef} className="text-sm text-gray-500 mb-4">
        (Check console for useRef value)
      </p>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => setRenderCount(renderCount + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
        >
          🔄 Re-Render
        </button>

        <button
          onClick={Increment}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
        >
          ➕ Increment (No Re-render)
        </button>
      </div>
    </div>
  );
}
 */


function Counter() {
  const countRef = useRef(0);
  const displayRef = useRef(null);

  const increment = () => {
    countRef.current += 1;
    displayRef.current.innerText = countRef.current;
  };

  const reset = () => {
    countRef.current = 0;
    displayRef.current.innerText = countRef.current;
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">useRef Counter</h2>

      <p className="text-lg font-medium text-gray-600 mb-4">
        Count: <span ref={displayRef} className="text-blue-600 font-bold">0</span>
      </p>

      <div className="flex flex-col gap-3">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
        >
          ➕ Increment
        </button>

        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}
