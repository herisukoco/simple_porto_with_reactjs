import React from "react"

export default function Header({title}){

    return(
        <div className="fixed z-[100] object-cover w-full px-[50px] flex items-center  bg-slate-700 justify-center top-0
        ">
            <h1 className="text-[24px] font-medium text-zinc-200">
                {title}
            </h1>

        </div>
    )
}