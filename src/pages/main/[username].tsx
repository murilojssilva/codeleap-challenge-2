import api from "@/services/api";
import { IPostState } from "@/store/modules/post/types";
import moment from "moment";
import { useRouter } from "next/router"
import { NotePencil, Trash } from "phosphor-react"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Main(){
    const { query } = useRouter();
    const [posts, setPosts] = useState<IPostState[]>([]);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const username = useSelector(state => state);

    useEffect(() => {
        api.get('posts').then(response => {
            setPosts(response.data);
            console.log(posts)
        })
    },[])
    
    return(
    <main className="flex flex-col items-center bg-background">
        <div className="flex flex-col justify-items-stretch bg-white gap-3 h-full overflow-auto 2xl:w-full lg:w-200">
            <header className="flex bg-purple-500 h-20 w-full px-7 items-center">
                <h1 className="text-white font-normal text-1.5xl">CodeLeap Network</h1>
            </header>
            <div className="flex flex-col gap-4 p-6">
                <div className="grid grid-col justify-items-stretch border-2 p-8 border-grey-900 rounded-lg gap-4">
                    <h1 className="text-black font-bold text-1.5xl">{`What's on your mind?`}</h1>

                    <h3 className="text-black font-normal text-base">Title</h3>
                    <input className="border-2 border-grey-700 rounded-lg px-3 py-2 placeholder-grey-500 w-full text-black" type="text" placeholder="Hello World" />

                    <h3 className="text-black font-normal text-base">Content</h3>
                    <textarea className="border-2 border-grey-700 rounded-lg px-3 py-2 placeholder-grey-500 w-full text-black" placeholder="Content Here" />

                    <button className="bg-purple-500 text-white rounded-lg justify-self-end px-6 py-1 text-base font-normal">Create</button>
                </div>
                {posts.map(post =>
                <div key={post.id} className="grid grid-col justify-items-stretch border-2 border-grey-900 rounded-lg gap-4">
                    <header className="bg-purple-500 h-20 w-full flex px-7 items-center justify-between">
                        <h1 className="text-white font-normal text-1.5xl">My First Post at CodeLeaP Network!</h1>
                        <div className="flex gap-2">
                            <button onClick={() => setShowModalDelete(true)}><Trash size={26} color="#FFFFFF" weight="bold" /></button>
                            <button onClick={() => setShowModalEdit(true)}><NotePencil size={26} color="#FFFFFF" weight="bold" /></button>

                            {showModalDelete ? (
                                <>
                                    <div className="fixed flex items-center justify-center inset-0 overflow-y-auto">
                                        <div
                                            className="fixed w-full h-full bg-black opacity-40"
                                            onClick={() => setShowModalDelete(false)}
                                        ></div>
                                        <div className="items-center justify-center">
                                            <div className="relative flex p-4 bg-white rounded-md shadow-lg 2xl:w-full lg:w-165">
                                                <div className="flex flex-col w-full">
                                                    <div className="flex items-center">
                                                        <h1 className="text-black font-bold text-1.5xl">Are you sure you want to delete this item?</h1>
                                                    </div>
                                                    <div className="justify-end gap-2 mt-3 sm:flex">
                                                        <button onClick={() => setShowModalDelete(false)} className="bg-white border-2 border-black text-black rounded-lg justify-self-end px-6 py-1 text-base font-normal">
                                                            Cancel
                                                        </button>
                                                        <button className="bg-red-500 border-2 border-red-500 text-white rounded-lg justify-self-end px-6 py-1 text-base font-normal">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                            {showModalEdit ? (
                                <>
                                    <div className="fixed flex items-center justify-center inset-0 overflow-y-auto">
                                        <div
                                            className="fixed w-full h-full bg-black opacity-40"
                                            onClick={() => setShowModalEdit(false)}
                                        ></div>
                                        <div className="items-center justify-center">
                                            <div className="relative flex p-4 bg-white rounded-md shadow-lg 2xl:w-full lg:w-165">
                                                <div className="flex flex-col w-full">
                                                    <div className="flex items-center">
                                                        <h1 className="text-black font-bold text-1.5xl">Edit item</h1>
                                                    </div>
                                                    <div className="grid grid-col justify-items-stretch gap-4">
                                                        <h3 className="text-black font-normal text-base">Title</h3>
                                                        <input className="border-2 border-grey-700 rounded-lg px-3 py-2 placeholder-grey-500 w-full text-black" type="text" placeholder="Hello World" />

                                                        <h3 className="text-black font-normal text-base">Content</h3>
                                                        <textarea className="border-2 border-grey-700 rounded-lg px-3 py-2 placeholder-grey-500 w-full text-black" placeholder="Content Here" />

                                                    </div>
                                                    <div className="justify-end gap-2 mt-3 sm:flex">
                                                        <button onClick={() => setShowModalEdit(false)} className="bg-white border-2 border-black text-black rounded-lg justify-self-end px-6 py-1 text-base font-normal">
                                                            Cancel
                                                        </button>
                                                        <button className="bg-green-500 border-2 border-green-500 text-white rounded-lg justify-self-end px-6 py-1 text-base font-normal">
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </header>
                    <div className="flex flex-col px-6 py-4 gap-4">
                        <div className="flex justify-between">
                            <span className="text-grey-700 font-bold text-base">@{post.user}</span>
                            <span className="text-grey-700 font-normal text-base">{moment(post.created_at).fromNow()}</span>
                        </div>
                        <div>
                            <p className="text-black font-normal text-base">{post.title}</p>
                            <p className="text-black font-normal text-base">{post.content}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </main>
    )
}