import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';

function Header() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };


    return (

        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
            <div className={styles.logo}>
                <img src="./src/assets/img/logo.png" alt="logomarca" />
            </div>
            <nav className={isSticky ? 'sticky' : ''}>

                <ul className={styles.navbar}>
                    <li><a href="#atuacao">ATUAÇÃO</a></li>
                    <li><a href="#saiba">SAIBA MAIS</a></li>
                    <li><a href="#sobre">SOBRE</a></li>
                    <li><a href="#parceiros">PARCEIROS</a></li>
                    <li><a href="#contato">FALE CONOSCO</a></li>
                </ul>
            </nav>

            <div className={styles.menu}>
                <img src="./src/assets/img/menu.svg" alt="" />
            </div>
            <div className={styles.container}>
                <nav className={styles.navbarLateral}>
                    <div className={styles.logo2}>
                        <img src="./src/assets/img/logo.png" alt="logomarca" />
                    </div>
                    <ul className={styles.navbar2}>
                        <li><a href="#atuacao">ATUAÇÃO</a></li>
                        <li><a href="#saiba">SAIBA MAIS</a></li>
                        <li><a href="#sobre">SOBRE</a></li>
                        <li><a href="#parceiros">PARCEIROS</a></li>
                        <li><a href="#contato">FALE CONOSCO</a></li>
                    </ul>

                </nav>
            </div>
        </header>

    )
}

export default Header