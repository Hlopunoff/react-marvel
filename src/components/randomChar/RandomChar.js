import React, {useState, useEffect} from 'react';
import './randomChar.scss';
import MarvelService from '../../services/marvelService';

import bgDecoration from '../../assets/img/Decoration.png';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

const RandomChar = () => {
    const service = new MarvelService();

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function onCharLoaded(char) {
        setLoading(false);
        setError(false);
        setChar(char);
    }

    function onUpdateChar() {
        onCharLoading();

        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;

        service.getCharacter(id)
        .then(onCharLoaded)
        .catch(onError);
    }

    function onError() {
        setLoading(false);
        setError(true);
    }

    function onCharLoading() {
        setLoading(true);
    }

    useEffect(() => {
        onUpdateChar();
    }, []);

    const spinner = loading ? <Spinner/> : null,
          err = error ? <Error/> : null,
          content = !(loading || error) ? <View char={char}/> : null;
    
    return (
        <section className="randChar">
            <div className="container">
                <div className="randChar__wrap">
                    {err}
                    {spinner}
                    {content}
                    <div className="randChar__cta">
                        <p className="randChar__cta-slogan">Random character for today!<br></br>
                        Do you want to get to know him better?</p>
                        <span className='randChar__cta-action'>Or choose another one</span>
                        <button className="randChar__cta-btn" onClick={onUpdateChar}>try it</button>
                        <img src={bgDecoration} alt="decoration" className="randChar__cta-decoration" />
                    </div>
                </div>
            </div>
        </section>
    );
};

function View(props) {
    const {name, thumbnail, description, wiki, homepage} = props.char;

    const imgStyle = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'contain',} : {'objectFit': 'cover',};

    return (
        <div className="randChar__card">
            <div className="randChar__img-wrap">
                <img className='randChar__img' src={thumbnail} alt={name} style={imgStyle}/>
            </div>
            <div className="randChar__descr">
                <h2 className="randChar__title">{name}</h2>
                <p className = "randChar__info" >{description}</p>
                <div className="randChar__btns">
                    <a href={homepage} className="randChar__btn randChar__btn_red">homepage</a>
                    <a href={wiki} className="randChar__btn randChar__btn_grey">wiki</a>
                </div>
            </div>
        </div>
    );
}

export default RandomChar;