import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "./MainContainer.module.css";
import { ShowTodos } from "./ShowTodos";

interface INewContent {
    id: string;
    content: string;
    done: boolean;
    deleted: boolean
};

export function MainContainer() {
    let id = uuidv4();
    const [todos, setTodos] = useState<INewContent[]>([]);
    const [newContent, setNewContent] = useState<INewContent>({
        id: "",
        content: "",
        done: false,
        deleted: false
    });

    const handleInputText = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNewContent({
            ...newContent,
            content: event.target.value,
            done: false,
            deleted: false
        });
    };

    const handleCreateTodo = (event: FormEvent) => {
        event.preventDefault();
        setTodos([...todos, { ...newContent, id: id }]);
        setNewContent({
            id: "",
            content: "",
            done: false,
            deleted: false
        })
    };

    const handleTodoDone = (id: string): void => {
        let updateState = todos.map(todo => {
            if (todo.id === id) {
                if (todo.done === false) {
                    return { ...todo, done: true }
                }
                if (todo.done === true) {
                    return { ...todo, done: false }
                }
            }
            return todo
        });

        setTodos(updateState)
    };

    const handleDeletedTodo = (id: string): void => {
        let updateState = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, deleted: true }
            }
            return todo
        });

        setTodos(updateState)
    };

    const counterTodos = (condition: boolean): number => {
        let filter = todos.filter(todo => {
            if (todo.deleted != true) {
                return todo.done === condition
            }
        });
        return filter.length
    };

    return (
        <main className={styles.container}>
            <form
                className={styles.todoCreator}
                name="todoCreator"
            >
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newContent.content}
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
                        <span className={styles.counterTodo}>
                            {counterTodos(false)}
                        </span>
                    </button>
                    <button>
                        <span>Concluídas</span>
                        <span className={styles.counterTodo}>
                            {counterTodos(true)}
                        </span>
                    </button>
                </section>
                <section className={styles.list}></section>
            </article>
            <ShowTodos
                hasTodos={todos.length === 0 ? false : true}
                todoList={todos}
                handleTodoDone={handleTodoDone}
                handleDeletedTodo={handleDeletedTodo}
            />
        </main>
    )
}