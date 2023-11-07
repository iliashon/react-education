import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: {
        lang: {
            ge: false,
            ru: true,
            en: false,
        },
    },
    reducers: {
        choiceLang(state, action) {
            state.lang = {
                ...Object.fromEntries(
                    Object.entries(state.lang).map(([key, value]) => {
                        return [key, (value = false)];
                    })
                ),
                [action.payload]: true,
            };
        },
    },
});

export const { choiceLang } = langSlice.actions;

export default langSlice.reducer;
