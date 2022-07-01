import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <h1 className="header__title"><span className='header__title_red'>Marvel</span> informational portal</h1>
                    <nav className="header__nav">
                        <a className='header__link header__link_active' href="#">Characters</a>
                        /
                        <a href="#" className="header__link">Comics</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;