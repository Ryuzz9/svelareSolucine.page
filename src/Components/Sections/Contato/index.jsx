import React, { useState } from "react";
import styles from './Contato.module.css';
import 'animate.css';

function Contato() {

    return (
        <section className={styles.contato}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="./src/assets/img/logo.png" alt="logoContato" />
                    <div className={styles.formulario}>
                        <h2>Preencha com seus dados <br />abaixo</h2>
                    </div>
                    <div className={styles.formularioInfo}>
                        <label htmlFor="text" className={styles.inputText}>nome</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            name="name"
                        />

                    </div>
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
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                    <button className={styles.btn}>Quero ingressar em um processo</button>
                </div>
            </div>




        </section>

    )

}

export default Contato;