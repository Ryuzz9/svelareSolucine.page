import styles from './Main.module.css';
import 'animate.css';

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
            <div className={styles.carrousel}>
                <div className={styles.carrouselWrapper}>
                    <div className={styles.carrouselItem}>
                        <h1>+60</h1>
                        <h2>Numero de clientes</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+800</h1>
                        <h2>Processos na plataforma</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+500</h1>
                        <h2>Processos finalizados</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+26</h1>
                        <h2>Seções de mediação</h2>
                    </div>
                    <div className={styles.carrouselItem}>
                        <h1>+800</h1>
                        <h2>Clientes</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
