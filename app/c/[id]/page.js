'use client'
import { cvFromGetById } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import Cv from "@/app/dashboard/cv/joycv/Cv";
import CvDiamond from "@/app/dashboard/cv/CvDiamond/CvDiamond";
import ClassicCv from "@/components/Cv/ClassicCv";
import PremiumCv from "@/components/Cv/PremiumCv";
import CVpaper from "@/app/dashboard/cv/templatetwo/CVpaper";
import CvGolden from "@/app/dashboard/cv/CvGolden/CvGolden";
// import CvDiamond from "../CvDiamond/CvDiamond";


function MainTemplatePreview({ params }) {
  console.log(params);  
  const [selectedTemplate, setSelectedTemplate] = useState("template2");
  const [data, setData] = useState({})

  useEffect(() => {
    cvFromGetById(params.id)
            .then((res) => {
              setData(res)
              setSelectedTemplate(res?.template || "template1")
            })
            .catch((err) => console.log(err));
}, [params.id]);
// console.log(data);
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