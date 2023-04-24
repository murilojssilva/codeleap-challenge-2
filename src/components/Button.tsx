import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({...rest}: IButtonProps){
    return(
        <button 
            className="bg-purple-500 text-white rounded-lg justify-self-end px-6 py-1 text-base font-normal"
            {...rest}
        />
    )
}