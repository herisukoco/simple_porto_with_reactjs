import React from "react"
import {Link} from "react-router-dom"
import Pict from "../assets/image/heri.jpg"
import {RiPlayCircleFill} from "react-icons/ri"

export default function Home(){

    return(
        <div className="w-screen h-screen flex-col p-[30px]
        bg-slate-600 text-zinc-300 overflow-hidden bg-cover bg-center" >
            <div>
                <h1 className="text-[32px] font-bold font">Hello...</h1>
                <h1 className="text-[24px] font-semibold">Saya Heri Sukoco</h1>
                <p className="text-[16px]">Seorang Web Developer</p>
            </div>

            <div className=" mt-6 relative flex flex-col items-center">
                <div className="object-cover w-[400px] h-[400px]">
                    <img className="rounded-full bg-center object-cover"  src={Pict} alt="" />
                </div>
                <div className="bg-center bg-cover border-[5px] border-zinc-200 rounded-full h-[559px] w-[420px] absolute -top-[12px]"></div>
            
            </div>
            <Link to={"/biodata"} className=" right-0 bottom-1 fixed rounded-full justify-center items-center text-zinc-300">
                <RiPlayCircleFill className="text-[82px]"/>
                </Link>  


        </div>
    )
}