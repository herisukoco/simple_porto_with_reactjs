import React from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import dataDetailSertifikat from "../constant/dataDetailSertifikat"
import ModalMenu from "../components/ModalMenu"

export default function DetailSertifikat(){
    
    const { item } = useParams()
    
    return(
        <div className="w-screen h-screen flex flex-col bg-slate-400 text-zinc-800 overflow-hidden">
            <Header title={item.toUpperCase()}/>
            <div className="mt-12 flex flex-col gap-2 font-bold text-[12px]">
                <p className="ml-[30px] justify-center items-center flex flex-col">
                    {dataDetailSertifikat[item].description}
                </p>

                <div className="flex flex-col">
                <table className="">
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Unit test</td>
                                <td>Ket/Nilai</td>
                            </tr>
                        </thead>
                        <tbody>

                    
                    {dataDetailSertifikat[item].data.map((item)=>{
                        return(
                            
                                <tr key={item.id}>
                                            
                                    <td className="bg-gray-200">{item.id}</td>
                                    <td className="bg-gray-200">{item.kode}</td>
                                    <td className="bg-gray-200">{item.unit}</td>

                                </tr>
                            
                        )
                    }
                    

                    )}

                        </tbody>
                    </table>
                </div>

            </div>
            <ModalMenu/> 
        </div>
    )
}