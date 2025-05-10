import styles from './Main.module.css';
import 'animate.css'; // Importar Animate.css localmente

function Main() {

    return (
        <main className={styles.mainPage}>
            <div className={`${styles.logoMain} animate__animated animate__fadeIn`}>
                <img src="./src/assets/img/logoMain.png" alt="logomarca" />
            </div>
            <div className={styles.text}>
                <p className="animate__animated animate__fadeInDown">A Justiça do futuro</p>
                <h1 className="animate__animated animate__fadeInDown">Resolução de leeds de forma rápida</h1>
                <button className="animate__animated animate__fadeInDown">QUERO ENTRAR EM CONTATO</button>
            </div>

        </main>
    )
}

export default Main