'use client'

import useAuth from "@/hooks/useAuth";
import { coverLetterFromGet, coverLetterFromPost } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import CoverDiamond from "../diamondCover/CoverDiamond";
import CoverLetter from "../joytemplate/CoverLetter";



function MainTemplatePreview({ selectedTemplate }) {
  const {user} = useAuth()
  const [data, setData] = useState({})
  useEffect(() => {
    coverLetterFromGet(user.email).then((res) => setData(res))
    .catch((err) => console.log(err))
  },[user])
    // Use selectedTemplate to dynamically render the chosen template
    return (
      <>
        {/* Render the selected template components or content here */}
        {selectedTemplate === 'template1' && <CoverDiamond cover={data}/>}
        {selectedTemplate === 'template2' && <CoverLetter coverLetter={data}/>}
        {selectedTemplate === 'template3' && <div>template3</div>}
        {selectedTemplate === 'template4' && <div>template4</div>}
        {/* Add more template previews as needed */}
      </>
    );
  }
  
  export default MainTemplatePreview;