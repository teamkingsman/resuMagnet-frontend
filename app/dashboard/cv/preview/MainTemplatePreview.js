'use client'

import useAuth from "@/hooks/useAuth";
import { cvFromGet } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import Cv from "@/app/dashboard/cv/joycv/Cv";
import CvDiamond from "@/app/dashboard/cv/CvDiamond/CvDiamond";



function MainTemplatePreview({ selectedTemplate }) {
  const {user} = useAuth()
  const [data, setData] = useState({})
  useEffect(() => {
    cvFromGet(user.email).then((res) => setData(res))
    .catch((err) => console.log(err))
  },[user])
    // Use selectedTemplate to dynamically render the chosen template
    return (
      <>
        {/* Render the selected template components or content here */}
        {selectedTemplate === 'template1' && <CvDiamond cv={data}/>}
        {selectedTemplate === 'template2' && <Cv cvData={data}/>}
        {selectedTemplate === 'template3' && <div>template3</div>}
        {selectedTemplate === 'template4' && <div>template4</div>}
        {/* Add more template previews as needed */}
      </>
    );
  }
  
  export default MainTemplatePreview;