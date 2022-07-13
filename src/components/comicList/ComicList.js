import React, {useState, useEffect} from 'react'
import styles from './comicList.module.scss';
import Comic from '../comic/Comic';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import MarvelService from '../../services/marvelService';

function ComicList() {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(210);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const service = new MarvelService();

    useEffect(() => {
      onComicsUpdate();
    }, [])
    

    function onComicsUpdate(offset) {
        onComicsLoading();

        service.getComics(offset)
            .then(onComicsLoaded)
            .catch(onComicsError);
    }

    function onComicsLoading() {
        setNewComicsLoading(true);
    }

    function onComicsLoaded(newComics) {
        let ended = false;
        if(newComics.length < 8) {
            ended = true;
        }

        setComics(prevComics => [...prevComics, ...newComics]);
        setLoading(false);
        setOffset(prevOffset => prevOffset + 8);
        setComicsEnded(ended);
    }

    function onComicsError() {
        setLoading(false);
        setError(true);
    }

    const spinner = loading ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const content = !(loading || error || !comics) ? comics.map(comic => <Comic key={comic.id} id={comic.id} title={comic.title} img={comic.thumbnail} price={comic.price}/>) : null;
    return (
        <>
            <div className={styles.comicList}>
                {spinner}
                {err}
                {content}
            </div>
            <button className={styles.btn} onClick={() => onComicsUpdate(offset)}>load more</button>
        </>
    );
}

export default ComicList;