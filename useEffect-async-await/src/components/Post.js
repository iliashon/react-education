import "./Post.css";

export default function Post({ id, userId, title, body }) {
    return (
        <div className="post">
            <small>{id}</small>
            <h2>{title}</h2>
            <p>{body}</p>
            <h3>{userId}</h3>
        </div>
    );
}
