import React from "react"


export default function ProjectCard({title, image, link, content}){
    return(
        <div className="bg-slate-300 flex flex-col gap-2 w-full md:w-[200px] lg:w-[400px] p-[20px] rounded-lg text-slate-700 mt-[20px] z-[0]">
            <h1 className="font-bold text-[16px]">{title}</h1>
            <img src={image} alt="" className="w-screen h-[200px] rounded-lg object-cover"/>
            <p className="font-semibold">{content}</p>
            <a href={link} target="_blank" className="bg-slate-700 text-slate-300 rounded-full h-[30px] w-[100px] justify-center items-center flex flex-col mx-auto">
                Repositori
            </a>
        </div>
    )
}