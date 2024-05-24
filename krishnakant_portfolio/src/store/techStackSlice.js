import { createSlice } from '@reduxjs/toolkit';
import techCardData from '../data/techStackData';

const toolsSlice = createSlice({
    name: 'techs',
    initialState: {
        techs: techCardData,
    },
    reducers: {
        setTechs(state, action) {
            state.techs = action.payload;
        },
    },
});

export const { setTechs } = toolsSlice.actions;
export default toolsSlice.reducer;
