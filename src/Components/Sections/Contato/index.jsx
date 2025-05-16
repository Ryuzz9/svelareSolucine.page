import React, { useState } from "react";
import styles from './Contato.module.css';
import 'animate.css';

function Contato() {

    return (
        <section className={styles.contato}>
            <div className={styles.logo}>
                <img src="./src/assets/img/logo.png" alt="logoContato" />
            </div>
            <div className={styles.tituloContato}>
                <img src="./src/assets/img/iconContato.png" alt="iconContato" />
                <h1>FALE CONOSCO</h1>
            </div>
            <div className={styles.subtitle}>
                <h2>CONTATO</h2>
                <div className={styles.line}></div>
                <p>Selecione abaixo o motivo
                    de seu contato:</p>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>


        </section>

    )

}

export default Contato;