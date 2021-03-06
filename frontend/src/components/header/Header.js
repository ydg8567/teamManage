import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderName from "./HeaderName";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import './Header.css';

const Header = () => {
    return (
        <header className="headerBody">
            <HeaderLogo />
            <HeaderName />
            <HeaderLogoutBtn />
        </header>
    );
};

export default Header;