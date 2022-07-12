import React from 'react';
import './char.scss';

const Char = (props) => {
    return (
        <div className="card" id={props.id} onClick={props.handler}>
            <div className="card__img-wrap">
                <img src={props.img} alt={props.title} className="card__img" style={props.imgStyle}/>
            </div>
            <h2 className="card__title">{props.title}</h2>
        </div>
    );
};

export default Char;