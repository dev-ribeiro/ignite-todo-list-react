import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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
            id: uuidv4(),
            content: event.target.value,
            done: false,
            deleted: false
        });
    };

    const handleCreateTodo = (event: FormEvent) => {
        event.preventDefault();
        setTodos(state => {
            return [...state, newContent]
        });
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

    const counterTodos = todos.filter(todo => {
        return todo.deleted === false
    });


    const doneTodos = todos.filter(todo => {
        return todo.done === true
    })

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
                            {counterTodos.length}
                        </span>
                    </button>
                    <button>
                        <span>Concluídas</span>
                        <span className={styles.counterTodo}>
                            {doneTodos.length}
                        </span>
                    </button>
                </section>
                <section className={styles.list}></section>
            </article>
            <ShowTodos
                hasTodos={counterTodos.length === 0 ? false : true}
                todoList={todos}
                handleTodoDone={handleTodoDone}
                handleDeletedTodo={handleDeletedTodo}
            />
        </main>
    )
}
