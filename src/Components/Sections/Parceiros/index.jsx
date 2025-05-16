import React, { useState } from "react";
import styles from './Parceiros.module.css';
import 'animate.css';

function Parceiros() {

    return (
        <section className={styles.parceiros}>
            <div className={styles.card}>
                <div className={styles.imgParceiros}>
                    <img src="./src/assets/img/parceirosIcon.png" alt="IconParceiros" />
                    <h1>PARCEIROS</h1>
                </div>
                <div className={styles.subtitle}>
                    <h2>Conheça nossos parceiros</h2>
                </div>
                <div className={styles.line}></div>
            </div>


        </section>
    )

}

export default Parceiros;