import {StateSchema} from "./StateSchema.ts";
import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "../../../../enteties/Todo";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {Todos: todoReducer},
        devTools: true,
        preloadedState: initialState,
    })
}