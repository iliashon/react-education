import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch(
            "https://api.detailingclub.ge/wp-json/wc/v3/products/categories?consumer_key=ck_5017bd7af02ddd893c8639e1a70b33a8e0e58b3d&consumer_secret=cs_838792ff8231f1cc01488d883169a150875f033f&lang=en"
        )
            .then((response) => response.json())
            .then((json) => setCategories(json))
            .catch((error) => console.log(error));
    }, []);

    console.log(categories);

    return (
        <div className="App">
            <ul>
                {categories &&
                    categories.map((cat) => {
                        if (cat.parent !== 0) {
                            return undefined;
                        }
                        return (
                            <li key={cat.id}>
                                - {cat.name}
                                {cat.parent === 0 && (
                                    <ul>
                                        {categories.map((category) => {
                                            if (cat.id === category.parent) {
                                                return (
                                                    <li key={category.id}>
                                                        -- {category.name}
                                                    </li>
                                                );
                                            }
                                            return undefined;
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export default App;
