import React, { useState } from "react";
import styles from './SaibaMais.module.css';
import 'animate.css';

function SaibaMais() {

    return (

        <section className={styles.saibaMais}>
            <div className={styles.info}>
                <div className={styles.subInfo}>
                    <img src="./src/assets/img/saibaMaisIcon.png" alt="" />
                    <h1>SAIBA MAIS</h1>
                </div>
                <div className={styles.line}></div>

                <h2>A importância de contratar um especialista</h2>
                <div className={styles.line1}></div>
                <p>Contratar um árbitro especialista lhe oferece uma série de vantagens em relação a um profissional generalista. A especialização permite um conhecimento mais aprofundado das leis, jurisprudências e práticas específicas da área em questão. Isso resulta em uma representação mais eficaz, uma compreensão mais aguçada das nuances legais e uma capacidade superior de antecipar e resolver problemas específicos</p>

            </div>
            <div className={styles.cardTable}>
                <ul>
                    <li>
                        <div className={styles.card}>
                            <img src="./src/assets/img/iconCard.png" alt="iconCard" />
                            <p>Expertise</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.card}>
                            <img src="./src/assets/img/iconCard.png" alt="iconCard" />
                            <p>Eficiência</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.card}>
                            <img src="./src/assets/img/iconCard.png" alt="iconCard" />
                            <p>Resultados</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )


}

export default SaibaMais;