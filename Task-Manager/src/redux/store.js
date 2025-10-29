import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../redux/slices/task/taskSlice'

export const store = configureStore({
    reducer : {
        tasks : taskReducer
    }
})