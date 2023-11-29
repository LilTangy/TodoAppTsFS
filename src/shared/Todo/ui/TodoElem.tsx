import cls from "./TodoElem.module.scss";
import {Button} from "../../Button";


interface TodoProps {
    id: string;
    deleteTodo: (id: string) => void;
    closeTodo: (id: string) => void;
    text: string;
}
export const TodoElem = ({id, deleteTodo, text, closeTodo}: TodoProps) => {

    const handleClick = (id: string) => {
        if (deleteTodo) {
            deleteTodo(id);
        }
    }

    return (
        <div className={cls.TodoElem}>
            <p>{text}</p>
            <Button type={"button"} onClick={() => handleClick(id)} as={"button"}>delete</Button>
            <Button type={"button"} onClick={() => closeTodo(id)} as={"button"}>close</Button>
        </div>
    );
};