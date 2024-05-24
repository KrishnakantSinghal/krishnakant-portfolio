import { createSlice } from '@reduxjs/toolkit';
import projectsCardData from '../data/projectCardData';

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: projectsCardData,
    },
    reducers: {
        setProjects(state, action) {
            state.projects = action.payload;
        },
    },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;
