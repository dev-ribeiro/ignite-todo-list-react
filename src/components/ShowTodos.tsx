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
    handleTodoDone: (id: string) => void;
    handleDeletedTodo: (id: string) => void;
};

export function ShowTodos({ hasTodos, todoList, handleTodoDone, handleDeletedTodo }: IPropsShowTodos): JSX.Element {
    console.log(todoList)

    if (hasTodos === false) {
        return (
            <section className={styles.notShowTodos}>
                <HiOutlineClipboardList />
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize suas ideias</span>
            </section>
        )
    }

    return (
        <section className={styles.showTodos}>
            {todoList.map(todo => {
                if (todo.deleted === false) {
                    return (
                        <TodoCard
                            key={todo.id}
                            todo={todo}
                            handleTodoDone={handleTodoDone}
                            handleDeletedTodo={handleDeletedTodo}
                        />)
                }
            })}
        </section>
    )
}
