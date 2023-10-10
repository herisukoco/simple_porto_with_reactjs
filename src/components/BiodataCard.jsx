import React from "react"

export default function({label, value, icons, link}){

    const handleLink= ()=>{
        window.open(link)
    }

    return(
        <div className="w-full h-full flex flex-col relative gap-1">
            <h1 className="text-[16px] font-light right-2">{label}</h1>
            <a href={link} target="_blank">
            <p className="text-[16px] font-semibold right-2">{value}</p>
            </a>
            
            <div className="right-0 text-[20px] absolute top-[25%]" onClick={handleLink}>
                {icons}
            </div>

        </div>
    )
}