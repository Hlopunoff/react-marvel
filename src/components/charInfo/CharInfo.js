import React, {useState, useEffect} from 'react';
import './charInfo.scss';
import MarvelService from '../../services/marvelService';

import ComicsList from '../comicsList/ComicsList';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

const CharInfo = (props) => {
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const service = new MarvelService();

    useEffect(() => {
        onUpdateChar();
    }, [props.selected])


    function onUpdateChar() {
        const id = props.selected;
        if(!id) {
            return;
        }

        onCharLoading();
        service.getCharacter(id)
            .then(onCharLoaded)
            .catch(onCharError);
    }

    function onCharLoaded(char) {
        setLoading(false);
        setChar(char);
    }

    function onCharError() {
        setLoading(false);
        setError(true);
    }

    function onCharLoading() {
        setLoading(true);
        setError(false);
    }

    const spinner = loading ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;
    
    return (
        <>
            {spinner}
            {err}
            {content}
        </>
    );
};

function View({char}) {
    const {thumbnail, name, description, homepage, wiki, comics} = char;

    const imgStyle = char.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'contain',} : {'objectFit': 'cover',};

    return (
        <div className='card-info'>
            <div className="card-info__header">
                <div className="card-info__logo-wrap">
                    <img src={thumbnail} alt={thumbnail} className="card-info__logo" style={imgStyle}/>
                </div>
                <div className="card-info__cta">
                    <h2 className="card-info__title">{name}</h2>
                    <a href={homepage} className="card-info__btn card-info__btn_red">Homepage</a>
                    <a href={wiki} className="card-info__btn card-info__btn_grey">wiki</a>
                </div>
            </div>
            <div className="card-info__body">
                <p className="card-info__descr">{description}</p>
                <ComicsList comics={comics}/>
            </div>
        </div>
    )
}

export default CharInfo;