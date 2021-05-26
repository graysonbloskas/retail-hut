import React from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import CartBtn from '../CartBtn';
import './style.css'

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <SearchBar />
            <CartBtn />
        </div>
    );
}

export default Header;
