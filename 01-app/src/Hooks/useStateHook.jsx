import React, { useState } from 'react';
//  Counter component using useState hooks

/*
What is useState?

useState is a React Hook that lets you add state to a functional component.
It gives you a state variable and a function to update that state.

Syntax

const [state, setState] = useState(initialValue);

state → Current value of the state

setState → Function to update the state

initialValue → Starting value of the state (number, string, object, array, etc.)


! useState is a fundamental React Hook that enables functional components to manage and track state

*/

const UseStateHook = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count > 0 || count < 100) {
            setCount(count + 1)
        }
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className='m-4 flex items-center justify-center gap-10'>
            <button onClick={handleDecrement} className='text-2xl font-extrabold bg-blue-500 text-white p-2 '>-</button>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement} className='text-2xl font-extrabold bg-blue-500 text-white p-2 '>+</button>
        </div>
    );
}

export default UseStateHook;
