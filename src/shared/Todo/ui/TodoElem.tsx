import cls from "./TodoElem.module.scss";
import {Button} from "../../Button";


interface TodoProps {
    id: string;
    deleteTodo: (id: string) => void
    text: string
}
export const TodoElem = ({id, deleteTodo, text}: TodoProps) => {

    const handleClick = (id: string) => {
        if (deleteTodo) {
            deleteTodo(id);
        }
    }

    return (
        <div className={cls.TodoElem}>
            <p key={id}>{text}</p>
            <Button type={"button"} onClick={() => handleClick(id)} as={"button"}>delete</Button>
        </div>
    );
};