import styles from './Header.module.css';
import React, { useState, useEffect } from 'react';
import logo from '/src/assets/img/logo.png';
import menu from '/src/assets/img/menu.svg';
import close from '/src/assets/img/close.svg';

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [IsAberta, setIsAberta] = useState(false);
    const [isFechar, setIsFechar] = useState(false); // Definição do estado para fechamento do menu

    const navbarAberta = () => {
        setIsAberta(!IsAberta);
    };

    const navbarFechar = () => {
        setIsFechar(!isFechar);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setIsSticky(window.pageYOffset > 0);
    };

    return (
        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
            <div className={`${styles.container} ${IsAberta ? styles.menuAberto : styles.navFechar}`}>
                <div className={styles.fechar}>
                    
                    <img src={close} alt="Fechar" onClick={navbarAberta}/>
                    
                </div>
                <nav className={styles.navbarLateral}>
                    <ul className={styles.navbar2}>
                        <li><a href="#atuacao">ATUAÇÃO</a></li>
                        <li><a href="#saiba">SAIBA MAIS</a></li>
                        <li><a href="#sobre">SOBRE</a></li>
                        <li><a href="#parceiros">PARCEIROS</a></li>
                        <li><a href="#contato">FALE CONOSCO</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="Logomarca" />
            </div>
            <div className={styles.menu}>
                <img src={menu} alt="Menu" onClick={navbarAberta} />
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
        </header>
    );
}

export default Header;
