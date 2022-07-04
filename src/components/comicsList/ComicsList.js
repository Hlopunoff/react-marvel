import React from 'react';
import SingleComic from '../singeComic/SingleComic';

const ComicsList = () => {
    return (
        <div className='card-info__comics'>
            <span className='card-info__body-title'>Comics:</span>
            <div className="card-info__comic-content">
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
                <SingleComic title="All-Winners Squad: Band of Heroes(2011) #3"/>
            </div>
        </div>
    );
};

export default ComicsList;