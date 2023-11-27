
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {test, expect} from "vitest"
import {getTodosCounter} from "./getTodosCounter.ts";

test("return todos list", () => {
    const state: DeepPartial<StateSchema> = {
        Todos: {count: 2}
    }
    expect(getTodosCounter(state as StateSchema)).toBe(2)
});