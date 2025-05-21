import styles from './Header.module.css'
import React, { useState, useEffect } from 'react';

function Header() {

    const [isSticky, setIsSticky] = useState(false);
    const [IsAberta, setIsAberta] = useState(false); //crinado um estado para o menu lateral

    //função para abrir o menu lateral
    const navbarAberta = () => {
          setIsAberta(!IsAberta);

    }

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

            <div className={`${styles.container} ${IsAberta ? styles.menuAberto : ''}`}>
                    <div className={styles.fechar}>
                        <img src="" alt="" />
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
                <img src="./src/assets/img/logo.png" alt="logomarca" />
            </div>
            <div className={styles.menu}>
                <img src="./src/assets/img/menu.svg" alt="" onClick={navbarAberta}/>
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



            <nav className={styles.navbarLateral}>

                <ul className={styles.navbar2}>
                    <li><a href="#atuacao">ATUAÇÃO</a></li>
                    <li><a href="#saiba">SAIBA MAIS</a></li>
                    <li><a href="#sobre">SOBRE</a></li>
                    <li><a href="#parceiros">PARCEIROS</a></li>
                    <li><a href="#contato">FALE CONOSCO</a></li>
                </ul>

            </nav>

        </header>

    )
}

export default Header