'use client'

import useAuth from "@/hooks/useAuth";
import { resumeFromGet } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import ResumeDiamond from "../diamondResume/ResumeDiamond";
import ClassicResume from "@/components/Resume/ClassicResume";
import PremiumResume from "@/components/Resume/PremiumResumeTwo";
import JoyResume from "../joytemplate/JoyResume";



function MainTemplatePreview({ selectedTemplate }) {
  const {user} = useAuth()
  const [data, setData] = useState({})
  useEffect(() => {
    resumeFromGet(user.email).then((res) => setData(res))
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
        {/* Add more template previews as needed */}
      </>
    );
  }
  
  export default MainTemplatePreview;