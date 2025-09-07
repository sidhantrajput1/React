import React, { useRef } from 'react';
import UserRefInput from './userRefInput';

const ForWardHooks = () => {
    const inputRef = useRef(null);

    const updateInput = () => {
        inputRef.current.focus();
        inputRef.current.value = 100;
        inputRef.current.style.color="red"
    }
    return (
        <div>
            <h1>Forward Ref</h1>
            <UserRefInput ref={inputRef} />
            <button className='border px-5 py-2' onClick={updateInput}>Update Input Field</button>
        </div>
    );
}

export default ForWardHooks;
