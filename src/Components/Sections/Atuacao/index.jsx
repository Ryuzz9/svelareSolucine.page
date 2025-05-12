import React, { useState } from "react";
import styles from './Atuacao.module.css';
import 'animate.css';

function Atuacao() {

    const [isLarge, setIsLarge] = useState(false);

    const toggleCardSize = () => {
        setIsLarge(!isLarge);

    }


    return (

        <section className={styles.atuacao}>
            <div className={styles.imgatuacao}>
                <img src="./src/assets/img/atuacaoicon.png" alt="atuacaoimg" />
                <h1>ATUAÇÃO</h1>
            </div>
            <p>Veja como poderei te ajudar</p>
            <div className={styles.line}>
            </div>
            <div className={`${styles.card} ${isLarge ? styles.largeCard : ''}`}>
                <div className={styles.imgCard}>
                    <img src="./src/assets/img/setaIcon.png" alt="setaIcon" />
                </div>
                <div className={styles.imgCard2}>
                    <img src="./src/assets/img/setaIcon.png" alt="setaIcon" />
                </div>
                <div className={styles.infoCard}>
                    <h1>EXTRAJUDICIAL</h1>
                    <div className={`${styles.textCard} ${isLarge ? styles.contentOn : ''}`}>
                        <p>• Definição: Processos e acordos realizados fora do âmbito judicial, sem a necessidade de intervenção do poder judiciário.• Exemplos de Aplicação: Divórcios amigáveis, inventários, reconhecimento de paternidade, entre outros procedimentos onde as partes estão em consenso.• Vantagens: Menor custo, maior rapidez, confidencialidade e menor formalidade.</p>
                    </div>
                </div>
                <button onClick={toggleCardSize}className={styles.btn}>
                    saber mais
                </button>
            </div>
        </section>


    )


}

export default Atuacao