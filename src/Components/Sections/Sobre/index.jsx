import React, { useState } from "react";
import styles from './Sobre.module.css';
import 'animate.css';

function Sobre() {

    return (
        <section className={styles.sobre}>
            <div className={styles.card}>
                <div className={styles.infoCard}>
                    <img src="./src/assets/img/iconAboutUs.png" alt="cardIcon" />
                    <h1>SOBRE O ESCRITÓRIO</h1>
                </div>
                <div className={styles.subInfo}>
                    <h2>Somos a maior plataforma de arbitragem do Brasil</h2>
                    <div className={styles.line}></div>
                    <p>Henrique de Oliveira e Silva Sou empresário especialista em Arbitragem, com experiência em negociação e resolução de conflitos sem envolver meios judiciais, de forma rápida e prática. A maioria dos litígios modernos podem ter um fim pacífico e sem envolver o demorado e custoso poder judiciário e e com essa premissa que a Svelare foi criada.</p>
                </div>

            </div>


        </section>


    )



}

export default Sobre