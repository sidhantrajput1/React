import React from 'react';
import UseStateHook from './Hooks/useStateHook';
import HandleCheckBox from './components/handleCheckBox';
import ControlledInput from "./components/controlledInput"
import UseEffectsHooks from './Hooks/useEffectsHooks';
import UseRefHooks from './Hooks/useRefHooks';
import ForWardHooks from './Hooks/forWardHooks';


const App = () => {
  return (
    <div className='bg-gray-700 h-screen text-white'>
      {/* <HandleCheckBox /> */}
      {/* <UseStateHook /> */}
      {/* <ControlledInput /> */}
      {/* <UseEffectsHooks /> */}
      {/* <UseRefHooks /> */}
      <ForWardHooks />
    </div>
  );
}

export default App;
