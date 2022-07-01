import React from 'react';
import './randomChar.scss';

import thumbnail from '../../assets/img/Thumbnail.png';
import bgDecoration from '../../assets/img/Decoration.png';

const RandomChar = () => {
    return (
        <section className="randChar">
            <div className="container">
                <div className="randChar__wrap">
                    <div className="randChar__card">
                        <div className="randChar__img-wrap">
                            <img className='randChar__img' src={thumbnail} alt="thumbnail" />
                        </div>
                        <div className="randChar__descr">
                            <h2 className="randChar__title">thor</h2>
                            <p className = "randChar__info" > As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir.While others have described Thor as an over - muscled, oafish imbecile, he 's quite smart and compassionate...</p>
                            <div className="randChar__btns">
                                <button className="randChar__btn randChar__btn_red">homepage</button>
                                <button className="randChar__btn randChar__btn_grey">wiki</button>
                            </div>
                        </div>
                    </div>
                    <div className="randChar__cta">
                        <p className="randChar__cta-slogan">Random character for today!<br></br>
                        Do you want to get to know him better?</p>
                        <span className='randChar__cta-action'>Or choose another one</span>
                        <button className="randChar__cta-btn">try it</button>
                        <img src={bgDecoration} alt="decoration" className="randChar__cta-decoration" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RandomChar;