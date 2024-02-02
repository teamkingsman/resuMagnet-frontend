'use client'

import useAuth from "@/hooks/useAuth";
import { cvFromGet } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import CvDiamond from "../diamondcv/CvDiamond";



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
        {selectedTemplate === 'template2' && <div>template2</div>}
        {selectedTemplate === 'template3' && <div>template3</div>}
        {selectedTemplate === 'template4' && <div>template4</div>}
        {/* Add more template previews as needed */}
      </>
    );
  }
  
  export default MainTemplatePreview;