import styles from './Main.module.css';

function Main(){

    return(
        <main className={styles.mainPage}>
              <div className={styles.logoMain}>
                <img src="./src/assets/img/logoMain.png" alt="logomarca"/> 
            </div>
            <div className={styles.text}>
            <p>A Justiça do futuro</p>
            <h1>Resolução de leeds de forma rápida</h1>
            </div>
              
        </main>
    )
}

export default Main