import React from "react"
import Header from "../components/Header"
import ModalMenu from "../components/ModalMenu"
import SerCard from "../components/SerCard"
import dataSertifikat from "../constant/dataSertifikat"
import Pict1 from "../assets/image/BNSP.jpg"
import Pict2 from "../assets/image/toefl.jpg"


const handleImage =(name)=>{
    switch(name){
        case "bnsp":
            return Pict1

        case "toefl":
            return Pict2
    }
}

export default function Sertifikat(){
    return(
        <div className="w-screen min-h-screen flex flex-col bg-slate-600 p-[30px] text-zinc-300 overflow-hidden items-center">
            <Header title={'Sertifikat'}/> 
            <div className="flex flex-col gap-4">
                {dataSertifikat.map((data) =>{
                    return(
                        <SerCard 
                            key={data.id}
                            title={data.title}
                            image={data.image && handleImage(data.image)}
                            link={data.link}
                            
                />
                    )
                    
                })}
                
            </div>
            
            <ModalMenu />
        </div>
    )
}