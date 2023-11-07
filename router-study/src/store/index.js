import { configureStore } from "@reduxjs/toolkit";
import langReduser from "./langSlice";

export default configureStore({
    reducer: {
        lang: langReduser,
    },
});
