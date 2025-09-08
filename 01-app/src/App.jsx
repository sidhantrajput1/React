import React from 'react';
import UseStateHook from './Hooks/useStateHook';
import HandleCheckBox from './components/handleCheckBox';
import ControlledInput from "./components/controlledInput"
import UseEffectsHooks from './Hooks/useEffectsHooks';
import UseRefHooks from './Hooks/useRefHooks';
import ForWardHooks from './Hooks/forWardHooks';``
import Counter from "./components/Counter"
import { CounterContext } from './Context/CounterContext';
import UseReducerHook from "./Hooks/useReducerHook"


const App = () => {
  // const CounterState = useContext(CounterContext);
  // console.log(CounterState)
  return (
    <div className='bg-gray-700 h-screen text-white'>
      {/* <HandleCheckBox /> */}
      {/* <UseStateHook /> */}
      {/* <ControlledInput /> */}
      {/* <UseEffectsHooks /> */}
      {/* <UseRefHooks /> */}
      {/* <ForWardHooks /> */}
      {/* <h1 className='text-center text-xl font-bold pt-4'>Count is {CounterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter /> */}

      <UseReducerHook />
    </div>
  );
}

export default App;
