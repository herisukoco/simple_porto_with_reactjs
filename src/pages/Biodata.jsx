import React from "react"
import Pict from "../assets/image/heri.jpg"
import Header from "../components/Header"
import BiodataCard from "../components/BiodataCard"
import { FiChevronRight, FiGithub, FiMail, FiPhoneCall} from "react-icons/fi"
import { MdLocationPin, MdSchool } from "react-icons/md"
import dataBio from "../constant/dataBio"
import ModalMenu from "../components/ModalMenu"


const handleIcon =(name)=>{
    switch(name){
        case "phone":
            return <FiPhoneCall/>

        case "email":
            return <FiMail/>
        
        case "school":
            return <MdSchool/>

        case "map":
            return <MdLocationPin/>

        case "github":
            return <FiGithub/>

        default:
            return <FiChevronRight/>
    
    }
}

export default function Biodata(){
    

    return(
        <div className="w-screen min-h-screen flex flex-col bg-slate-600 p-[30px] text-zinc-300 overflow-hidden items-center">
            <Header title="Biodata"/>

            <div className="mt-[60px] flex flex-col justify-center items-center relative">
                <img src={Pict} alt="" className="rounded-full w-[200px] h-[200px] object-cover"/>
                <div className="w-[220px] h-[220px] border-[3px] border-dashed rounded-full absolute border-slate-300"></div>
            </div>
            <div className="flex flex-col mt-6 gap-8 mb-[100px]">

                {dataBio.map((data)=>{
                    return(
                        <BiodataCard
                            key={data.id}
                            label={data.label}
                            value={data.value}
                            icons={data.icons && handleIcon(data.icons)}
                            link={data.link}

                        /> 
                    )
                })}

            </div>


            <ModalMenu/>

        </div>
    )
}