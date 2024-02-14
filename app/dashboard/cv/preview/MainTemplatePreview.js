'use client'

import useAuth from "@/hooks/useAuth";
import { cvFromGet, cvTemplateUpdate } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import ClassicCv from "@/components/Cv/ClassicCv";
import PremiumCv from "@/components/Cv/PremiumCv";
import Cv from "@/app/dashboard/cv/joycv/Cv";
import CvDiamond from "../CvDiamond/CvDiamond";
import { useSearchParams } from "next/navigation";
import CVpaper from "../templatetwo/CVpaper";
import CvGolden from "../CvGolden/CvGolden";



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
    if (data._id) {
      const obj = { template: selectedTemplate };
      const updateData = data?._id && selectedTemplate ? cvTemplateUpdate(data._id, obj) : Promise.resolve({ ok: false });
      updateData
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }

    },[data._id, selectedTemplate])
  useEffect(() => {
    if(user.email){
      cvFromGet(user.email).then((res) => {
        setData(res)
        setSelectedTemplate(res?.template || "template1")
      })
      .catch((err) => console.log(err))
    }
  },[user.email])
    // Use selectedTemplate to dynamically render the chosen template
    return (
      <>
        {/* Render the selected template components or content here */}
        {selectedTemplate === 'template1' && <CvDiamond cv={data}/>}
        {selectedTemplate === 'template2' && <Cv cvData={data}/>}
        {selectedTemplate === 'template3' && <ClassicCv cv={data}/>}
        {selectedTemplate === 'template4' && <PremiumCv cv={data}/>}
        {selectedTemplate === 'template5' && <CVpaper cv={data}/>}
        {selectedTemplate === 'template6' && <CvGolden cv={data}/>}
        {/* Add more template previews as needed */}
      </>
    );
  }
  
  export default MainTemplatePreview;