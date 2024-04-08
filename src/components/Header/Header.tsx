import React from 'react';
import './Header.css';

export type HeaderProps = {
    title: string;
    description: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className='header'>
            <img className='logo' src='./favicon.svg' alt='logo' />
            <h1 className='title'>{title}</h1>
            {/* <p className='desc'>{description}</p> */}
        </header>
    );
}

export default Header;