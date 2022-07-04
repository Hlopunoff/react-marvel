import React from 'react';
import './singleComic.scss';

const SingleComic = (props) => {
    return (
        <span className="card-info__comic" >{props.title}</span>
    );
};

export default SingleComic;