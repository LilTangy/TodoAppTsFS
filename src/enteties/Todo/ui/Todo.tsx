import {Input} from "../../../shared/Input";


import cls from "./Todo.module.scss";
import React, {useState} from "react";
import {Button} from "../../../shared/Button";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../model/selectors/getTodos/getTodos.ts";
import {getTodosCounter} from "../model/selectors/getTodosCounter/getTodosCounter.ts";
import {todoActions} from "../model/slice/TodoSlice.tsx";
import {TodoElem} from "../../../shared/Todo";

export const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
    const todosCount = useSelector(getTodosCounter);
    const [todoText, setTodoText] = useState("");
    const onChange = (todoText: string) => {
        setTodoText(todoText)
    }

    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todoText) {
            dispatch(todoActions.addTodo(todoText));
            setTodoText("");
        }
    };

    const handleTodoDone = (id: string) => {
        dispatch(todoActions.removeTodo(id));
    };

    return (<>
            <form onSubmit={handleAddTodo} className={cls.Todo}>
        <Input value={todoText} onChange={onChange} />
        <Button type={"submit"} children={"Add"} />
    </form>
            <div className="Todos">
                {todosCount > 0 &&
                    todos.map((todo) => (
                        <TodoElem
                            id={todo.id}
                            deleteTodo={handleTodoDone}
                            text={todo.text}
                        ></TodoElem>
                    ))}
                {todosCount === 0 && <p>No todos</p>}
            </div>
        </>

    );
};