import { createSlice } from '@reduxjs/toolkit';
import toolsCardData from "../data/toolStackData"

const toolsSlice = createSlice({
    name: 'tools',
    initialState: {
        tools: toolsCardData,
    },
    reducers: {
        setTools(state, action) {
            state.tools = action.payload;
        },
    },
});

export const { setTools } = toolsSlice.actions;
export default toolsSlice.reducer;
