import React from 'react';
import './spinner.scss';
import gif from '../../assets/img/spinner.gif';

const Spinner = () => {
    return (
        <div className='spinner'>
            <img src={gif} alt="spinner" className="spinner__img" />
        </div>
    );
};

export default Spinner;