import Image from "next/image";

export default function SignUp(){
    return(
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="fixed grid grid-col justify-items-stretch bg-white p-6 gap-3 rounded-lg">
            <h1 className="text-black font-bold text-1.5xl">Welcome to CodeLeap network</h1>
            <h3 className="text-black font-normal text-base">Please enter your username</h3>
            <input className="border-2 border-grey-700 rounded-lg p-2 placeholder-grey-500" type="text" placeholder="John doe" />
            <button className="bg-purple-500 text-white rounded-lg justify-self-end px-6 py-1 text-base font-bold">ENTER</button>
        </div>
    </main>
    )
}