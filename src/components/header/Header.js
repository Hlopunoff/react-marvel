import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <Link to='/' className="header__title"><span className='header__title_red'>Marvel</span> informational portal</Link>
                    <nav className="header__nav">
                        <NavLink className='header__link' to='/' style={({isActive}) => isActive ? {color: '#9F0013'} : {color: '#000'}}>Characters</NavLink>
                        /
                        <NavLink to='/comics' className="header__link" style={({isActive}) => isActive ? {color: '#9F0013'} : {color: '#000'}}>Comics</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;