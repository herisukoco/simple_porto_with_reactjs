
import React from "react"
import Header from "../components/Header"
import ModalMenu from "../components/ModalMenu"
import SkillCard from "../components/SkillCard"
import dataSkill from "../constant/dataSkill"

export default function Skill(){
    return(
        <div className="w-screen min-h-screen flex flex-col bg-slate-600 p-[30px] overflow-hidden items-center">
            <Header title={'Skill'}/>
            <div className="flex flex-col gap-4">
                {dataSkill.map((data) =>{
                    return(
                        <SkillCard 
                            key={data.id}
                            title={data.title}
                            content={data.content}
                            image={data.image}
                />
                    )
                    
                })}
                
            </div>
            <ModalMenu/>
        </div>
    )

}