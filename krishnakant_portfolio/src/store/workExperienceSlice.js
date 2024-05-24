import { createSlice } from '@reduxjs/toolkit';
import workExperienceData from '../data/workExperienceData';

const workExperienceSlice = createSlice({
    name: 'workExperiences',
    initialState: {
        experiences: workExperienceData,
    },
    reducers: {
        setExperiences(state, action) {
            state.experiences = action.payload;
        },
    },
});

export const { setExperiences } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;
