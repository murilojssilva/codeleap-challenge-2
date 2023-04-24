import { TextareaHTMLAttributes } from "react";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ ...rest }: ITextareaProps) {
    return(
        <textarea
            className="border-2 border-grey-700 rounded-lg px-3 py-2 placeholder-grey-500 w-full text-black"
            {...rest}
        />
    )
}