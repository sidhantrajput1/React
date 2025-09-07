import React, { useEffect, useState } from "react";

/*

What is SideEffects?
SideEffect is 


Definition

useEffect is a React Hook that lets you perform side effects in functional components.
It runs after React renders your component, so it won’t block the UI.

useEffect(() => {
  Your side effect code (runs after render)
  
  return () => {
    Optional cleanup code (runs before unmount or before next effect)
  };
}, [dependencies]);


Runs after render → perfect for API calls, event listeners, DOM updates, console logs.

Dependency array decides when it runs:

    [] → run once on mount.
    [value] → run whenever value changes.
    No array → run after every render (not common).

Can return a cleanup function → used to remove listeners, stop timers, cancel requests.

*/

const UseEffectsHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(function () {
    calledCount();

    return () => {
      console.log("Cleanup before next effect or unmount");
    };
  }, [count]);

  function calledCount() {
    console.log("Called Count State");
  }

  return (
    <div className="flex flex-col gap-4 items-center ">
      <h3>UseEffects</h3>
      <button
        className="border py-2 px-5 cursor-pointer text-center"
        onClick={() => setCount(count + 1)}
      >
        Count
      </button>
    </div>
  );
};

export default UseEffectsHooks;
