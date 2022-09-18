import logoTodo from "../images/logoTodo.png";
import styles from "./Header.module.css";

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logoTodo} alt="Logo de um foguete com a palavra TODO por cima." />
        </header>
    )
}