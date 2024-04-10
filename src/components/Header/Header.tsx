import React from 'react';
import styles from './Header.module.scss';

export type HeaderProps = {
    title: string;
    description: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src='./favicon.svg' alt='logo' />
            <h1 className={styles.title}>{title}</h1>
        </header>
    );
}

export default Header;