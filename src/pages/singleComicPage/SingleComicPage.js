import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './singleComicPage.module.scss';

import Banner from '../../components/banner/Banner';
import MarvelService from '../../services/marvelService';
import Spinner from '../../components/spinner/Spinner';
import Error from '../../components/error/Error';

function SingleComicPage() {
    const { id } = useParams();
    const [comic, setComic] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const service = new MarvelService();

    useEffect(() => {
        onComicUpdate(id);
    }, [id])

    function onComicUpdate(id) {
        onComicLoading();

        service.getComicById(id)
            .then(onComicLoaded)
            .catch(onComicError);
    }

    function onComicLoading() {
        setLoading(true);
    }

    function onComicLoaded(comic) {
        setComic(comic);
        setLoading(false);
    }

    function onComicError() {
        setLoading(false);
        setError(true);
    }

    const spinner = loading ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;
    return (
        <main className="main">
            <section className="section">
                <div className="container">
                <Banner/>
                </div>
            </section>
            <section className={styles.comicSection}>
                <div className="container">
                    {spinner}
                    {err}
                    {content}
                </div>
            </section>
        </main>
    );
}

function View({comic}) {
    const {title, pages, thumbnail, price, description} = comic;
    return (
        <div className={styles.comic}>
            <div className={styles.wrap}>
                <div className={styles['img-wrap']}>
                    <img src={thumbnail} alt={title} className={styles.img} />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.descr}>{description}</p>
                    <span className={styles['amount-of-pages']}>{pages} pages</span>
                    <span className={styles.lang}>Language: en-us</span>
                    <span className={styles.price}>{price}</span>
                </div>
            </div>
            <Link to='/comics' className={styles.btn}>Back to all</Link>
        </div>
    );
}

export default SingleComicPage;