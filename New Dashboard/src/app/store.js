import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/Application/applicationSlice.js";
import jobReducer from "../features/Job/jobSlice.js";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    job: jobReducer,
    employee: employeeReducer,
  },
});
