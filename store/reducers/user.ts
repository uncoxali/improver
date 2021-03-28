import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'user',
    initialState: {
        data: {
            name: "ali"
        },
    },
    reducers: {
        setMeData(state, { payload }) {
            state.data = payload;
        },
    },
});

export const { setMeData } = slice.actions;

export default slice.reducer;
