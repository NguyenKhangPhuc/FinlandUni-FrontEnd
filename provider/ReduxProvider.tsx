'use client'

import { configureStore } from "@reduxjs/toolkit";
import uniReducer from '../reducers/uniSlice';
import { Provider } from "react-redux";
import { ReactNode } from "react";
interface Props {
    children: ReactNode;
}
const store = configureStore({
    reducer: {
        universities: uniReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
const ReduxProvider = ({ children }: Props) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default ReduxProvider