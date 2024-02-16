"use client"
import GoldenResume from "@/app/dashboard/resume/GoldenResume/GoldenResume";
// import { usePathname } from "next/navigation";

import ResumeDiamond from "@/app/dashboard/resume/diamondResume/ResumeDiamond";
import JoyResume from "@/app/dashboard/resume/joytemplate/JoyResume";
import Resumes from "@/app/dashboard/resume/templatetwo/Resumes";
import ClassicResume from "@/components/Resume/ClassicResume";
import PremiumResume from "@/components/Resume/PremiumResumeTwo";
import useAuth from "@/hooks/useAuth";
import { resumeFromGetByEmail, resumeFromGetById } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

const ResumeViewer = ({ params }) => {
  // const [selectedTemplate, setSelectedTemplate] = useState("template1");

  // useEffect(()=>{

  // },[])
  return (
    <div>
      {/* Render the selected template components or content here */}
        {selectedTemplate === 'template1' && <ResumeDiamond resume={data}/>}
        {selectedTemplate === 'template2' && <JoyResume resume={data}/>}
        {selectedTemplate === 'template3' && <ClassicResume resume={data}/>}
        {selectedTemplate === 'template4' && <PremiumResume resume={data} />}
        {selectedTemplate === 'template5' && <Resumes resume={data}></Resumes>}
        {selectedTemplate === 'template6' && <GoldenResume resume={{data}}/>}
      {/* Add more template previews as needed */}
    </div>
  );
};

export default ResumeViewer;
