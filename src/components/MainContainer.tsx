import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "./MainContainer.module.css";
import { ShowTodos } from "./ShowTodos";

interface INewContent {
    id:string;
    content:string;
    done:boolean
};

export function MainContainer() {
    const [todos, setTodos] = useState<INewContent[]>([]);
    const [newContent, setNewContent] = useState<INewContent>({
        id:"",
        content:"",
        done:false
    });

    const handleInputText = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        let id = uuidv4();
        setNewContent({
            id,
            content: event.target.value,
            done:false
        });
    };

    const handleCreateTodo = (event: FormEvent) => {
        event.preventDefault();
        setTodos([...todos, newContent]);
    };

    console.log(todos);
    console.log(newContent);

    return (
        <main className={styles.container}>
            <form
                className={styles.todoCreator}
                name="todoCreator"
            >
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleInputText}
                />
                <button
                    type="submit"
                    onClick={handleCreateTodo}
                >
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
                todoList={todos}
            />
        </main>
    )
}