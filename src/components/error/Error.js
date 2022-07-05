import React from 'react';
import './error.scss';
import err from '../../assets/img/error.gif';

const Error = () => {
    return (
        <div className='error'>
            <img src={err} alt="error" className="error__img" />
        </div>
    );
};

export default Error;