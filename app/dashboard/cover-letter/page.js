import CoverLetter from "@/components/CoverLetter/coverLetter";
import CoverLetterData from "@/components/CoverLetter/coverLetterData";
import { useState } from "react";


const Template1 = () => {
    const[item,setItem]=useState([]);
    const [loading, setLoading] = useState(true);
    if(loading){
        return (
          <>  
            <CoverLetterData setItem={setItem} setLoading={setLoading} />
          </>
        )
    }
    return (
        <div>
             <CoverLetter item={item}/>
        </div>
    );
};

export default Template1;