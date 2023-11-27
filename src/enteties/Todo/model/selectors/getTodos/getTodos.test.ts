import {getTodos} from "./getTodos.ts";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {test, expect} from "vitest"

test("return todos list", () => {
    const state: DeepPartial<StateSchema> = {
       Todos: {todos: [{id: "23", text: "asd"}]}
    }
    expect(getTodos(state as StateSchema)).toEqual([{id: "23", text: "asd"}])
});