import {InputHTMLAttributes, memo} from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}
export const Input = memo(({placeholder, value, onChange, type = "text", ...otherProps}: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }
    return (
        <input className={cls.Input} placeholder={placeholder} value={value} onChange={onChangeHandler} type={type} {...otherProps} />
    );
});