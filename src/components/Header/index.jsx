import Logo from "../../assets/NuKenzie.svg"
import styles from "./style.module.css"

export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={Logo} alt="Logo Nu Kenzie" />
        </header>
    )
}