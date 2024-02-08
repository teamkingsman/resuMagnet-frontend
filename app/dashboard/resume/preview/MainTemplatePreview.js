'use client'

import useAuth from "@/hooks/useAuth";
import { resumeFromGet, resumeTemplateUpdate } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import ResumeDiamond from "../diamondResume/ResumeDiamond";
import ClassicResume from "@/components/Resume/ClassicResume";
import PremiumResume from "@/components/Resume/PremiumResumeTwo";
import JoyResume from "../joytemplate/JoyResume";
import { useSearchParams } from "next/navigation";
import Resumes from "../templatetwo/Resumes";
import GoldenResume from "../GoldenResume/GoldenResume";



function MainTemplatePreview() {
  const {user} = useAuth()
  const [data, setData] = useState({})
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const searchParams = useSearchParams()
  
  const search = searchParams.get('template')
  useEffect(() => {
    if(search){
      setSelectedTemplate(search)
    }
  },[search])

  useEffect(() => {
    if(data._id)
  {
    const obj={template:selectedTemplate}
    resumeTemplateUpdate(data?._id, obj)
    .then((res) => {
      console.log(res)
    }).catch((err) => console.log(err))

  }

    },[data._id, selectedTemplate])
  
  useEffect(() => {
    resumeFromGet(user.email)
    .then((res) => {
      setData(res)
      if(res?.template)
    setSelectedTemplate(res?.template || "template1")
    }
    
    )
    .catch((err) => console.log(err))
  },[user.email])
    // Use selectedTemplate to dynamically render the chosen template
    return (
      <>
        {/* Render the selected template components or content here */}
        {selectedTemplate === 'template1' && <ResumeDiamond resume={data}/>}
        {selectedTemplate === 'template2' && <JoyResume resume={data}/>}
        {selectedTemplate === 'template3' && <ClassicResume resume={data}/>}
        {selectedTemplate === 'template4' && <PremiumResume resume={data} />}
        {selectedTemplate === 'template5' && <Resumes resume={data}></Resumes>}
        {selectedTemplate === 'template6' && <GoldenResume resume={{data}}/>}
        {/* Add more template previews as needed */}
      </>
    );
  }
  
  export default MainTemplatePreview;