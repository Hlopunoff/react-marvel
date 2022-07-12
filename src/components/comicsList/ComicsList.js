import React from 'react';
import SingleComic from '../singeComic/SingleComic';

const ComicsList = (props) => {
    // const comicsList = props.comics.map((comic, i) => {
    //     return <SingleComic title={comic.name} key={i}/>
    // })
    return (
        <div className='card-info__comics'>
            <span className='card-info__body-title'>Comics:</span>
            <div className="card-info__comic-content">
                {/* {
                    comicsList.length > 0 ? null : 'There is no comics with this character'
                } */}
               {/* {comicsList} */}
            </div>
        </div>
    );
};

export default ComicsList;