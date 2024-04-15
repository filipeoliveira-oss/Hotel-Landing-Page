export default function ButtonApp({text}){
    return(
        <div className="w-32  h-12 items-center justify-center flex rounded bg-orange-500 text-white font-bold">
            <button className="h-full w-full">{text}</button>
        </div>
    )
}