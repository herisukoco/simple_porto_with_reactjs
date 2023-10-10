import React from "react"
import Header from "../components/Header"
import ModalMenu from "../components/ModalMenu"
import SekolahCard from "../components/SekolahCard"
import dataSekolah from "../constant/dataSekolah"


export default function Pendidikan(){
    return(
        <div className="w-screen min-h-screen flex flex-col bg-slate-600 p-[30px] text-zinc-300 overflow-hidden items-center">
            <Header title={'Riwayat Pendidikan'}/>
            <div className="flex flex-col gap-4">
                {dataSekolah.map((data) =>{
                    return(
                        <SekolahCard 
                            key={data.id}
                            title={data.title}
                            content={data.content}
                            image={data.image}
                            year={data.year}
                />
                    )
                    
                })}
                
            </div>

            <ModalMenu/>
        </div>
    )

}