import React, { useState } from 'react';
import Resume from '@/components/Resume/resume';
import ResumeData from '@/components/Resume/resumeData';
const Template1 = () => {
    const [data, setData]=useState([]);
    const [loading, setLoading] = useState(true);

     
   if(loading){
    return (
      <>
          <ResumeData setData={setData} setLoading={setLoading} />
       
      </>
    )
}
    return (
        <div>
              <Resume data={data}/> 
        </div>
    );
};

export default Template1;