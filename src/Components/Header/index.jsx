import styles from './Header.module.css'

function Header(){

return(
    <header className={styles.header}>
         <div className={styles.logo}>
            <img src="./src/assets/img/logo.png" alt="logomarca"/>
        </div>
        <nav>
            
            <ul className={styles.navbar}>
                <li><a href="">ATUAÇÃO</a></li>
                <li><a href="">SAIBA MAIS</a></li>
                <li><a href="">SOBRE</a></li>
                <li><a href="">FALE CONOSCO</a></li>
            </ul>
        </nav>
    </header>

)
}

export default Header