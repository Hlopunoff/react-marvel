import React, {useState, useEffect} from 'react';
import Char from '../char/Char';
import MarvelService from '../../services/marvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import './charList.scss';

import bg from '../../assets/img/bg_asset.png';

const CharList = () => {
    const service = new MarvelService();
    const [chars, setChars] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onUpdateChars();
    }, []);

    function onUpdateChars() {
        onCharsLoading();

        service.getCharacters()
        .then(onCharsLoaded)
        .catch(onCharsError);
    }

    function onCharsLoading() {
        setLoading(true);
    }

    function onCharsError() {
        setLoading(false);
        setError(true);
    }

    function onCharsLoaded(chars) {
        setLoading(false);
        setChars(prevChars => [...prevChars, ...chars]);
    }

    const spinner = loading ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const elems = !(loading || error || !chars) ? chars.map(char => <Char key={char.id} id={char.id} title={char.name} img={char.thumbnail}/>) : null;

    return (
        <>
            <div className="cards__content">
                <div className="cards__list">
                    {spinner}
                    {err}
                    {elems}
                </div>
                <button className="cards__btn">load more</button>
                <img src={bg} alt="character bg" className="char-bg" />
            </div>
        </>
    );
};

export default CharList;