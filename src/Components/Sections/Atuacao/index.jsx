import React, { useState } from "react";
import styles from './Atuacao.module.css';
import 'animate.css';

function Atuacao() {

    const [isLarge, setIsLarge] = useState(false);
    const [isLarge1, setIsLarge1] = useState(false);
    const [isLarge2, setIsLarge2] = useState(false);

    const toggleCardSize = () => {
        setIsLarge(!isLarge);

    }
    const toggleCardSize1 = () => {
        setIsLarge1(!isLarge1);

    }
    const toggleCardSize2 = () => {
        setIsLarge2(!isLarge2)

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
                <button onClick={toggleCardSize} className={styles.btn}>
                    saber mais
                </button>
            </div>

            {/* card 2 */}
            <div className={`${styles.card} ${isLarge1 ? styles.largeCard1 : ''}`}>
                <div className={styles.imgCard}>
                    <img src="./src/assets/img/setaIcon.png" alt="setaIcon" />
                </div>
                <div className={styles.imgCard2}>
                    <img src="./src/assets/img/setaIcon.png" alt="setaIcon" />
                </div>
                <div className={styles.infoCard}>
                    <h1>ARBRITAGEM</h1>
                    <div className={`${styles.textCard} ${isLarge1 ? styles.contentOn1 : ''}`}>
                        <p>• Definição: Método de resolução de conflitos em que as partes escolhem um ou mais árbitros, que atuam como juízes privados para decidir a questão.• Exemplos de Aplicação: Disputas comerciais, contratos complexos, questões societárias.• Vantagens: Decisões finais e vinculantes, especialização dos árbitros no assunto em disputa, confidencialidade.</p>
                    </div>
                </div>
                <button onClick={toggleCardSize1} className={styles.btn}>
                    saber mais
                </button>
            </div>

            {/* card 3 */}
            <div className={`${styles.card} ${isLarge2 ? styles.largeCard2 : ''}`}>
                <div className={styles.imgCard}>
                    <img src="./src/assets/img/setaIcon.png" alt="setaIcon" />
                </div>
                <div className={styles.imgCard2}>
                    <img src="./src/assets/img/setaIcon.png" alt="setaIcon" />
                </div>
                <div className={styles.infoCard}>
                    <h1>MEDIAÇÃO</h1>
                    <div className={`${styles.textCard} ${isLarge2 ? styles.contentOn2 : ''}`}>
                        <p>• Definição: Processo voluntário onde um mediador imparcial ajuda as partes a chegarem a um acordo mútuo, sem impor uma decisão.• Exemplos de Aplicação: Conflitos familiares, disputas de vizinhança, questões trabalhistas.• Vantagens: Promove o diálogo e a cooperação, solução amigável e duradoura, rapidez e baixo.
                        </p>
                    </div>
                </div>
                <button onClick={toggleCardSize2} className={styles.btn}>
                    saber mais
                </button>
            </div>
            <button className={styles.btn2}><img src="./src/assets/img/iconWhatsapp.png" alt="zapIcon" />FALAR COM UM ESPECIALISTA</button>
        </section>


    )


}

export default Atuacao