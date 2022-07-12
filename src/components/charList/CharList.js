import React, {useState, useEffect, useRef} from 'react';
import Char from '../char/Char';
import MarvelService from '../../services/marvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import './charList.scss';

import bg from '../../assets/img/bg_asset.png';

const CharList = (props) => {
    const service = new MarvelService();
    const [chars, setChars] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(210);
    const [newCharsLoading, setNewCharsLoading] = useState(false);

    const [selectedChar, setSelectedChar] = useState('');
    const listRef = useRef();

    useEffect(() => {
        onUpdateChars();
    }, []);

    function onUpdateChars(offset) {
        onCharsLoading();

        service.getCharacters(offset)
            .then(onCharsLoaded)
            .catch(onCharsError);
    }

    function onCharsLoading() {
        setNewCharsLoading(true);
    }

    function onCharsError() {
        setLoading(false);
        setError(true);
    }

    function onCharsLoaded(chars) {
        setLoading(false);
        setNewCharsLoading(false);
        setChars(prevChars => [...prevChars, ...chars]);
        setOffset(prevOffset => prevOffset + 9);
    }

    const cardListHandler = (e) => {
        setSelectedChar(+e.currentTarget.getAttribute('id'));
        props.setSelected(selectedChar);
    } 

    const spinner = loading ? <Spinner/> : null;
    const err = error ? <Error/> : null;
    const elems = !(loading || error || !chars) ? chars.map(char => {
        const imgStyle = char.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'contain',} : {'objectFit': 'cover',};
        
        return <Char key={char.id} id={char.id} title={char.name} img={char.thumbnail} imgStyle={imgStyle} handler={cardListHandler}/>
    }) : null;

    return (
        <>
            <div className="cards__content">
                <div className="cards__list" ref={listRef}>
                    {spinner}
                    {err}
                    {elems}
                </div>
                <button className="cards__btn" onClick={onUpdateChars}>load more</button>
                <img src={bg} alt="character bg" className="char-bg" />
            </div>
        </>
    );
};

export default CharList;