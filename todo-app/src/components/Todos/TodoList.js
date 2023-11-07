import Todo from "./Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, deleteTodo }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length ? (
                <h2>Todo list is empty</h2>
            ) : (
                todos.map((todo, index) => (
                    <Todo
                        key={index}
                        todo={todo}
                        index={index}
                        deleteTodo={deleteTodo}
                    />
                ))
            )}
        </div>
    );
}
