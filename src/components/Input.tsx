import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: IInputProps) {
    return(
        <input
            className="border-2 border-grey-700 rounded-lg px-3 py-2 placeholder-grey-500 w-full text-black"
            type="text"
            {...rest}
        />
    )
}