import React from 'react';
import './charList.scss';

import img from '../../assets/img/loki.png';

const CharList = () => {
    return (
        <>
            <div className="cards__content">
                <div className="cards__list">
                    <div className="card">
                    <div className="card__img-wrap">
                        <img src={img} alt="loki" className="card__img" />
                    </div>
                    <h2 className="card__title">loki</h2>
                    </div>
                    <div className="card">
                        <div className="card__img-wrap">
                            <img src={img} alt="loki" className="card__img" />
                        </div>
                        <h2 className="card__title">loki</h2>
                    </div>
                    <div className="card">
                        <div className="card__img-wrap">
                            <img src={img} alt="loki" className="card__img" />
                        </div>
                        <h2 className="card__title">loki</h2>
                    </div>
                    <div className="card">
                        <div className="card__img-wrap">
                            <img src={img} alt="loki" className="card__img" />
                        </div>
                        <h2 className="card__title">loki</h2>
                    </div>
                    <div className="card">
                        <div className="card__img-wrap">
                            <img src={img} alt="loki" className="card__img" />
                        </div>
                        <h2 className="card__title">loki</h2>
                    </div>
                    <div className="card">
                        <div className="card__img-wrap">
                            <img src={img} alt="loki" className="card__img" />
                        </div>
                        <h2 className="card__title">loki</h2>
                    </div>
                    <div className="card">
                        <div className="card__img-wrap">
                            <img src={img} alt="loki" className="card__img" />
                        </div>
                        <h2 className="card__title">loki</h2>
                    </div>
                    <div className="card">
                        <div className="card__img-wrap">
                            <img src={img} alt="loki" className="card__img" />
                        </div>
                        <h2 className="card__title">loki</h2>
                    </div>
                    <div className="card">
                        <div className="card__img-wrap">
                            <img src={img} alt="loki" className="card__img" />
                        </div>
                        <h2 className="card__title">loki</h2>
                    </div>
                </div>
                <button className="cards__btn">load more</button>
            </div>
        </>
    );
};

export default CharList;