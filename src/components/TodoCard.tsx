import { MouseEvent } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import styles from "./TodoCard.module.css";

interface ITodo {
    id: string;
    content: string;
    done: boolean
};

interface IPropsTodoCard {
    key: string;
    todo: ITodo;
    handleTodoDone: (id: string) => void;
    handleDeletedTodo: (id: string) => void;
}

export function TodoCard({ todo, handleTodoDone, handleDeletedTodo }: IPropsTodoCard) {
    const onHandleDoneTodo = (event: MouseEvent<HTMLButtonElement>): void => {
        let id = event.currentTarget.parentElement?.id;
        if (typeof id != "undefined") {
            handleTodoDone(id)
        }
    };

    const onHandleDeletedTodo = (event: MouseEvent<HTMLButtonElement>) => {
        let id = event.currentTarget.parentElement?.id;
        if (typeof id != "undefined") {
            handleDeletedTodo(id)
        }
    };

    return (
        <div
            id={todo.id}
            className={todo.done === false
                ? `${styles.card} ${styles.unDone}`
                : `${styles.card} ${styles.done}`}
        >
            <button
                className={styles.doneButton}
                onClick={onHandleDoneTodo}
            >
                {todo.done === false
                    ? <BsToggleOff />
                    : <BsToggleOn />
                }
            </button>
            <span>{todo.content}</span>
            <button
                className={styles.deleteButton}
                onClick={onHandleDeletedTodo}
            >
                <MdOutlineDeleteForever />
            </button>
        </div>
    )
}