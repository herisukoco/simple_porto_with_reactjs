import React, {useState} from "react"
import {RiMenu2Fill} from "react-icons/ri"
import {Link} from "react-router-dom"

export default function ModalMenu(){
 
    const [show, setShow]= useState(false)

    const handleShowModal = ()=>{
        setShow(!show)
    }
 
    return(
     <>
        {show &&(
            <div className="w-screen h-screen flex flex-col fixed top-0 left-0 z-[200] justify-center items-center bg-slate-800/95 text-gray-300">
                <Link to={'/'} className="w-full h-12 flex flex-col justify-center items-center font-bold" onClick={handleShowModal}>Home</Link>
                <Link to={'/Biodata'} className="w-full h-12 flex flex-col justify-center items-center font-bold" onClick={handleShowModal}>Biodata</Link>
                <Link to={'/Skill'} className="w-full h-12 flex flex-col justify-center items-center font-bold" onClick={handleShowModal}>Skill</Link>
                <Link to={'/Pendidikan'} className="w-full h-12 flex flex-col justify-center items-center font-bold" onClick={handleShowModal}>Pendidikan</Link>
                <Link to={'/Sertifikat'} className="w-full h-12 flex flex-col justify-center items-center font-bold" onClick={handleShowModal}>Sertifikat</Link>
                <Link to={'/Project'} className="w-full h-12 flex flex-col justify-center items-center font-bold" onClick={handleShowModal}>Project</Link>


            </div>
        )}
        <button onClick={handleShowModal} className=" -right-1 -bottom-1 z-[250] fixed rounded-full justify-center items-center bg-cover  bg-slate-700 w-[50px] h-[50px]">
            <RiMenu2Fill className="text-zinc-300 text-[31px]"/>
        </button>
     </>
     
 )
    
}