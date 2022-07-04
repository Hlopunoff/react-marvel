import React from 'react';
import Char from '../char/Char';
import './charList.scss';

import bg from '../../assets/img/bg_asset.png';
import img from '../../assets/img/loki.png';

const CharList = () => {
    return (
        <>
            <div className="cards__content">
                <div className="cards__list">
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                    <Char title="loki" img={img}/>
                </div>
                <button className="cards__btn">load more</button>
                <img src={bg} alt="character bg" className="char-bg" />
            </div>
        </>
    );
};

export default CharList;