import { HiOutlineClipboardList } from "react-icons/hi";
import styles from "./ShowTodos.module.css";

interface ITodo {
    id:string;
    content:string;
    done:boolean
};

interface IPropsShowTodos {
    hasTodos:boolean;
    todoList:ITodo[]
}

export function ShowTodos({hasTodos, todoList}:IPropsShowTodos): JSX.Element {
    if (hasTodos === false) {
        return (
            <section className={styles.notShowTodos}>
                <HiOutlineClipboardList />
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize suas ideias</span>
            </section>
        )
    } else {
        return (
            <section className={styles.showTodos}>
                {todoList.map(todo => {
                    return(
                        <div 
                            key={todo.id}
                            className={todo.done === false ? styles.unDone : styles.done}
                        >
                            {todo.content}
                        </div>
                    )
                })}
            </section>
        )
    }
}