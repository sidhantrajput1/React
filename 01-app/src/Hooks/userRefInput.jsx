import React from 'react';

const UserRefInput = (props) => {
    return (
        <div>
            <input className='py-2' type="text" ref={props.ref} />
        </div>
    );
}

export default UserRefInput;
