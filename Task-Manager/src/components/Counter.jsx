import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/counter';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-semibold text-gray-700">Redux Counter</h1>

        <div className="flex items-center space-x-6">
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            className="px-5 py-2 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 transition duration-200"
          >
            −
          </button>

          <span className="text-3xl font-bold text-gray-800 min-w-[60px] text-center">
            {count}
          </span>

          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            className="px-5 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition duration-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
