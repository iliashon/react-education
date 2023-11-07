import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { choiceLang } from "../store/langSlice";

const style = {
    footer: {
        width: "100%",
        height: "100px",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
    },
};

export default function MainLayout() {
    const langArrState = useSelector((state) => state.lang.lang);

    const dispatch = useDispatch();

    return (
        <>
            <header>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/products"}>Products</NavLink>
                <div>
                    {Object.keys(langArrState).map((lang) => (
                        <button
                            key={lang}
                            className={langArrState[lang] ? "active-lang" : ""}
                            onClick={() => dispatch(choiceLang(lang))}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </header>
            <Outlet />
            <footer style={style.footer}>2023 Kozel dev</footer>
        </>
    );
}
