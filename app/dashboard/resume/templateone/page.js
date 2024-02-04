'use client'
import Resume from '@/components/Resume/resume';
import useAuth from '@/hooks/useAuth';
import { resumeFromGet } from '@/lib/BuilderAPI';

import React, { useEffect, useState } from 'react';

const Page = () => {
    const {user}=useAuth();
    const[resume,setResume]=useState({});
console.log(resume);
   useEffect(()=>{
    resumeFromGet(user.email)
       .then((res)=>{
           setResume(res);
       })
   },[user])
    return (
        <div>
         <Resume resume={resume}/>
        </div>
    );
};

export default Page;