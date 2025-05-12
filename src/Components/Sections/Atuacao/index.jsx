import styles from './Atuacao.module.css';
import 'animate.css';

function Atuacao() {

    return (

        <section className={styles.atuacao}>
            <div className={styles.imgatuacao}>
                <img src="./src/assets/img/atuacaoicon.png" alt="atuacaoimg" />
                <h1>ATUAÇÃO</h1>
            </div>
            <p>Veja como poderei te ajudar</p>
            <div className={styles.line}>
            </div>
            
        </section>


    )


}

export default Atuacao