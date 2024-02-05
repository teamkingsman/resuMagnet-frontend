'use client'

import useAuth from "@/hooks/useAuth";
import { coverLetterFromGet, coverLetterFromPost } from "@/lib/BuilderAPI";
import { useEffect, useState } from "react";
import CoverDiamond from "../diamondCover/CoverDiamond";
import ClassicCoverLetter from "@/components/CoverLetter/ClassicCoverLetter";
import PremiumCoverLetter from "@/components/CoverLetter/PremiumCoverLetter";



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
        {selectedTemplate === 'template2' && <div>template2</div>}
        {selectedTemplate === 'template3' && <ClassicCoverLetter coverLetter={data}/>}
        {selectedTemplate === 'template4' && <PremiumCoverLetter coverLetter={data}/>}
        {/* Add more template previews as needed */}
      </>
    );
  }
  
  export default MainTemplatePreview;