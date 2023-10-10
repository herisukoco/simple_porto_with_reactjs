import React from "react"

export default function SekolahCard({title, image, year, content}){
    return(
        <div className="bg-slate-300 flex flex-col gap-2 w-full md:w-[200px] lg:w-[400px] p-[20px] rounded-lg text-slate-700 mt-[20px] z-[0]">
            <h1 className="font-bold text-[16px]">{title}</h1>
            <img src={image} alt="" className="w-full h-[200px] rounded-lg object-cover"/>
            <p className="font-semibold">{year}</p>
            <p className="font-light">{content}</p>
        </div>
    )
}