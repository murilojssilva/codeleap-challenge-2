import { Reducer } from "react";
import { IPostState } from "./types";

const INITIAL_STATE: IPostState[] = [{
    id: '',
    user: '',
    title: '',
    content: '',
    created_at: '',
}];

const posts: Reducer<IPostState> = () => {
    return INITIAL_STATE;
}

export default posts;