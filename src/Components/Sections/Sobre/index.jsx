import React, { useState, useEffect } from "react";
import styles from './Sobre.module.css';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import iconAboutUs from '/src/assets/img/iconAboutUs.png';

function Sobre() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            easing: "ease-in-out", // Tipo de easing
            once: true, // Animação ocorre apenas uma vez
        });
    }, []);


    return (
        <section className={styles.sobre} id="sobre">
            <div className={styles.card}data-aos="fade-right">
                <div className={styles.infoCard}data-aos="fade-right">
                    <img src={iconAboutUs} alt="cardIcon" />
                    <h1>SOBRE O ESCRITÓRIO</h1>
                </div>
                <div className={styles.subInfo}data-aos="fade-right">
                    <h2>Somos a maior plataforma de arbitragem do Brasil</h2>
                    <div className={styles.line}></div>
                    <p><h3 className={styles.destque}>Henrique de Oliveira e Silva</h3> <br /> Sou empresário especialista em Arbitragem, com experiência em negociação e resolução de conflitos sem envolver meios judiciais, de forma rápida e prática. A maioria dos litígios modernos podem ter um fim pacífico e sem envolver o demorado e custoso poder judiciário e e com essa premissa que a Svelare foi criada.</p>
                </div>

            </div>


        </section>


    )



}

export default Sobre