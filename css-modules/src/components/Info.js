import "./Info.css";
import styles from "./Info.module.css";

console.log(styles);

// {
//     "info": "Info_info__s8vxq",
//     "myOtherButton": "Info_myOtherButton__8e85U"
// }

export default function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from the component</h1>
            <button className={styles.myOtherButton}>Click me</button>
        </div>
    );
}
