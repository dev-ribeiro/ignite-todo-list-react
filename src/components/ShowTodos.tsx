import { HiOutlineClipboardList } from "react-icons/hi";
import styles from "./ShowTodos.module.css";

interface Todo {
    id:string;
    content: string;
    done: boolean
}

interface TodoProps {
    hasTodos: boolean;
    todoList: Todo[];
}

export function ShowTodos(props: TodoProps): JSX.Element {
    console.log(props)

    if (props.hasTodos === false) {
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
                {props.todoList.map(todo => {
                    return(
                        <div key={todo.id}>
                            {todo.content}
                        </div>
                    )
                })}
            </section>
        )
    }
}