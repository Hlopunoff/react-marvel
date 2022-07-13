import React from 'react'
import styles from './comic.module.scss';

function Comic(props) {
    const imgStyle = props.img === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {objectFit: 'contain'} : {objectFit: 'cover'};
    return (
        <div className={styles.comic} id={props.id}>
            <div className={styles['img-wrap']}>
                <img src={props.img} alt={props.title} className={styles.img} style={imgStyle}/>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.price}>{props.price}</span>
        </div>
    );
}

export default Comic;