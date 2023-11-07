import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder="Enter todo"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <Button type="submit" title="Text submit">
                    Submit
                </Button>
            </form>
        </div>
    );
}
