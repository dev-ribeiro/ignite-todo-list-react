import { HiOutlineClipboardList } from "react-icons/hi";
import styles from "./ShowTodos.module.css";
import { TodoCard } from "./TodoCard";

interface ITodo {
    id: string;
    content: string;
    done: boolean;
    deleted: boolean
};

interface IPropsShowTodos {
    hasTodos: boolean;
    todoList: ITodo[];
    handleTodoDone: (id:string) => void
};

export function ShowTodos({ hasTodos, todoList, handleTodoDone}: IPropsShowTodos): JSX.Element {
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
                    return <TodoCard 
                        key={todo.id} 
                        todo={todo}
                        handleTodoDone={handleTodoDone}
                        />
                })}
            </section>
        )
    }
}