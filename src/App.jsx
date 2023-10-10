import React from "react"
import { Routes, Route} from "react-router-dom"
import Biodata from "./pages/Biodata"
import Home from "./pages/Home"
import Skill from "./pages/Skill"
import Pendidikan from "./pages/Pendidikan"
import Sertifikat from "./pages/Sertifikat"
import DetailSertifikat from "./pages/DetailSertifikat"
import Project from "./pages/Project"

export default function App(){
  return(

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/biodata" element={< Biodata/>} />
      <Route path="/skill" element={<Skill/>} />      
      <Route path="/Pendidikan" element={<Pendidikan/>} />
      <Route path="/Pendidikan" element={<Pendidikan/>} />
      <Route path="/Sertifikat" element={<Sertifikat/>} />
      <Route path="/Sertifikat/:item" element={<DetailSertifikat/>} />
      <Route path="/Project" element={<Project/>} />
      
    </Routes>
  )
}