import React from 'react'
import { useParams } from 'react-router-dom';

const SingleCharPage = ({data}) => {
    const {name, description, thumbnail} = data;
    return (
        <>
            <div className="wrap">
                <div className="img-wrap">
                    <img src={thumbnail} alt={name} className="img" />
                </div>
                <div className="info">
                    <h2 className="title">{name}</h2>
                    <p className="descr">{description}</p>
                </div>
            </div>
        </>
    );
}

export default SingleCharPage;
