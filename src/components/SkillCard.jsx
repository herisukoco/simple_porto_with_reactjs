import React from "react"

export default function SkillCard({title, image, content}){
    return(
        <div className="bg-slate-300 flex flex-col gap-2 w-full md:w-[200px] lg:w-[400px] p-[20px] rounded-lg text-slate-700 mt-[20px] z-[0]">
            <h1 className="text-[16px] font-bold">{title}</h1>
            <img src={image} alt={title} className="w-full h-[200px] object-cover rounded-lg" />
            <p className="font-light "> {content}</p>
        </div>
    )
}