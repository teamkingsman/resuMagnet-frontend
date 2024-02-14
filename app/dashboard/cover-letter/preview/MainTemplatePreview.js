'use client'

import useAuth from "@/hooks/useAuth";
import { coverLetterFromGet, coverLetterFromPost } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import CoverDiamond from "../diamondCover/CoverDiamond";
import ClassicCoverLetter from "@/components/CoverLetter/ClassicCoverLetter";
import PremiumCoverLetter from "@/components/CoverLetter/PremiumCoverLetter";
import CoverLetter from "../joytemplate/CoverLetter";
import { useSearchParams } from "next/navigation";
import Letter from "../templatetwo/Letter";
import GoldenCover from "../GoldenCover/GoldenCover";



function MainTemplatePreview() {
  const {user} = useAuth()
  const [data, setData] = useState({})
  const [selectedTemplate, setSelectedTemplate] = useState('template1')
  const searchParams = useSearchParams()
  
  const search = searchParams.get('template')
  useEffect(() => {
    if(search){
      setSelectedTemplate(search)
    }
  },[search])
  useEffect(() => {
    if(user?.email){
      coverLetterFromGet(user.email).then((res) => {
        if(res){
          console.log(res)
          setData(res)
        }
      })
    }
  },[user?.email])
    // Use selectedTemplate to dynamically render the chosen template
    return (
      <>
        {/* Render the selected template components or content here */}
        {selectedTemplate === 'template1' && <CoverDiamond cover={data}/>}
        {selectedTemplate === 'template2' && <CoverLetter coverLetter={data}/>}
        {selectedTemplate === 'template3' && <ClassicCoverLetter coverLetter={data}/>}
        {selectedTemplate === 'template4' && <PremiumCoverLetter coverLetter={data}/>}
        {selectedTemplate === 'template5' && <Letter cover={data}/>}
        {selectedTemplate === 'template6' && <GoldenCover cover={data}/>}
        {/* Add more template previews as needed */}
      </>
    );
  }
  
  export default MainTemplatePreview;