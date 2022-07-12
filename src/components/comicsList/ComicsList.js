import React from 'react';
import SingleComic from '../singeComic/SingleComic';

const ComicsList = (props) => {
    const comicList = props.comics?.map((item, i) => {
        return <SingleComic title={item?.name} key={i}/>
    }).slice(0, 10);
    return (
        <div className='card-info__comics'>
            <span className='card-info__body-title'>Comics:</span>
            <div className="card-info__comic-content">
                {comicList ? comicList : 'There is no any comic for this character'}
            </div>
        </div>
    );
};

export default ComicsList;