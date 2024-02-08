"use client"
// import { usePathname } from "next/navigation";

import ResumeDiamond from "@/app/dashboard/resume/diamondResume/ResumeDiamond";
import JoyResume from "@/app/dashboard/resume/joytemplate/JoyResume";
import ClassicResume from "@/components/Resume/ClassicResume";
import PremiumResume from "@/components/Resume/PremiumResumeTwo";
import useAuth from "@/hooks/useAuth";
import { resumeFromGet, resumeFromGetById } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

const ResumeViewer = ({ params }) => {
  console.log(params);  
  const [selectedTemplate, setSelectedTemplate] = useState("template2");
  const [data, setData] = useState({})

  useEffect(() => {
    resumeFromGetById(params.id)
            .then((res) => setData(res))
            .catch((err) => console.log(err));
}, [params.id]);
console.log(data);
  return (
    <div>
      {params.id}
      {/* Render the selected template components or content here */}
      {selectedTemplate === "template1" && <ResumeDiamond resume={data} />}
      {selectedTemplate === "template2" && <JoyResume resume={data} />}
      {selectedTemplate === "template3" && <ClassicResume resume={data} />}
      {selectedTemplate === "template4" && <PremiumResume resume={data} />}
      {/* Add more template previews as needed */}
    </div>
  );
};

export default ResumeViewer;
