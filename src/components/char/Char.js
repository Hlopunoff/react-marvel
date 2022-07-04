import React from 'react';
import './char.scss';

const Char = (props) => {
    return (
        <div className="card">
            <div className="card__img-wrap">
                <img src={props.img} alt={props.title} className="card__img" />
            </div>
            <h2 className="card__title">{props.title}</h2>
        </div>
    );
};

export default Char;