import React from "react"
import Header from "../components/Header"
import ModalMenu from "../components/ModalMenu"
import ProjectCard from "../components/ProjectCard"
import Porto from "../assets/image/porto.jpg"
import dataProject from "../constant/dataProject"
import Bot from "../assets/image/bot.jpg"


const handleImage =(name)=>{
    switch(name){
        case "porto":
            return Porto

        case "bot":
            return Bot
    }
}

export default function Project(){
    return(
        <div className="w-screen min-h-screen flex flex-col bg-slate-600 p-[30px] text-zinc-300 overflow-hidden items-center">
            <Header title={'Project'}/>
            <div className="flex flex-col gap-4">
                {dataProject.map((data) =>{
                    return(
                        <ProjectCard 
                            key={data.id}
                            title={data.title}
                            image={data.image && handleImage(data.image)}
                            content={data.content}
                            link={data.link}
                            
                />
                    )
                    
                })}
                
            </div>
            
            <ModalMenu/>
        </div>
    )
}