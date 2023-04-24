import { Reducer } from "react";
import { IPostState } from "./types";

const INITIAL_STATE: IPostState[] = [{
    id: '',
    user: '',
    title: '',
    content: '',
    created_at: new Date,
}];

const posts: Reducer<IPostState[], IPostState> = () => {
    return INITIAL_STATE;
}

export default posts;