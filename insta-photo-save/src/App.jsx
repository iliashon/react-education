import "./App.css";
import img from "./android-chrome-512x512.png";

function App() {
    return (
        <div className="App">
            <a href={img} download="photo.png">
                Save
            </a>
            <img
                src="https://scontent.cdninstagram.com/v/t51.2885-15/239164206_110886417965688_5134272765281544846_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjAweDE1MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=3xsPbtNjVeUAX8nkcah&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjY0MTQ0MzUwMDE5MTU4OTIyNw%3D%3D.2-ccb7-5&oh=00_AfBZQIyYoC3CR2YfRpW7TgAmacr7HIoz3r4kIL1ZLKKPIA&oe=654CAAF2&_nc_sid=10d13b"
                alt=""
            />
        </div>
    );
}

export default App;
