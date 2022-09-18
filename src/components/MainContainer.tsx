import { FormEvent, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "./MainContainer.module.css";
import { ShowTodos } from "./ShowTodos";

export function MainContainer() {
    const [todos, setTodos] = useState([]);

    const handleCreateTodo = (event: FormEvent) => {
        event.preventDefault();
        console.log("Teste")
    };

    return (
        <main className={styles.container}>
            <form className={styles.todoCreator}>
                <input type="text" name="todo" placeholder="Adicione uma nova tarefa" />
                <button onClick={handleCreateTodo}>
                    <span>Criar</span>
                    <BsPlusCircle />
                </button>
            </form>
            <article className={styles.todoList}>
                <section className={styles.controller}>
                    <button>
                        <span>Tarefas criadas</span>
                        <span className={styles.counterTodo}>0</span>
                    </button>
                    <button>
                        <span>Concluídas</span>
                        <span className={styles.counterTodo}>0</span>
                    </button>
                </section>
                <section className={styles.list}></section>
            </article>
            <ShowTodos 
                hasTodos={todos.length === 0 ? false : true}
                todosList={todos}
            />
        </main>
    )
}