import React, {useState, useEffect} from 'react';
import './randomChar.scss';
import MarvelService from '../services/marvelService';

import bgDecoration from '../../assets/img/Decoration.png';

const RandomChar = () => {
    const service = new MarvelService();
    const [char, setChar] = useState({});

    function onCharLoaded(char) {
        setChar(char);
    }

    function onUpdateChar() {
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        service.getCharacter(id)
        .then(onCharLoaded);
    }

    useEffect(() => {
        onUpdateChar();
    }, []);

    const {name, thumbnail, description, wiki, homepage} = char;
    
    return (
        <section className="randChar">
            <div className="container">
                <div className="randChar__wrap">
                    <div className="randChar__card">
                        <div className="randChar__img-wrap">
                            <img className='randChar__img' src={thumbnail} alt={name} />
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

export default RandomChar;