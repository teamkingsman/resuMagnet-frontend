"use client"
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import GoldenResume from "@/app/dashboard/resume/GoldenResume/GoldenResume";
import ResumeDiamond from "@/app/dashboard/resume/diamondResume/ResumeDiamond";
import JoyResume from "@/app/dashboard/resume/joytemplate/JoyResume";
import Resumes from "@/app/dashboard/resume/templatetwo/Resumes";
import ClassicResume from "@/components/Resume/ClassicResume";
import PremiumResume from "@/components/Resume/PremiumResumeTwo";
import useAuth from "@/hooks/useAuth";
import { resumeFromGetById } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";

const ResumeViewer = ({ params }) => {
  const resumeRef = useRef(null);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    resumeFromGetById(params.id)
      .then((res) => {
        setData(res)
        setSelectedTemplate(res?.template || "template1")
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  const handleDownload = async () => {
    const element = resumeRef.current;

    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'tabloid', orientation: 'portrait' },
      // removeContainer: true 
    };
    

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <div ref={resumeRef}>
        {selectedTemplate === 'template1' && <ResumeDiamond resume={data}/>}
        {selectedTemplate === 'template2' && <JoyResume resume={data}/>}
        {selectedTemplate === 'template3' && <ClassicResume resume={data}/>}
        {selectedTemplate === 'template4' && <PremiumResume resume={data} />}
        {selectedTemplate === 'template5' && <Resumes resume={data}></Resumes>}
        {selectedTemplate === 'template6' && <GoldenResume resume={data}/>}
      </div>

      <div className="flex items-center justify-center my-10">
        <button className="btn btn-outline btn-primary" onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default ResumeViewer;
