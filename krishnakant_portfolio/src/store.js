import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './store/projectSlice';
import workExperienceSlice from './store/workExperienceSlice';
import toolStachSlice from './store/toolStackSlice';
import techStackSlice from './store/techStackSlice';

const store = configureStore({
    reducer: {
        projectData: projectSlice,
        workExperienceData: workExperienceSlice,
        toolsData: toolStachSlice,
        techsData: techStackSlice
    },
});

export default store;
