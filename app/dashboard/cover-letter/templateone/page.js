'use client'
import CoverLetter from '@/components/CoverLetter/coverLetter';
import useAuth from '@/hooks/useAuth';
import { coverLetterFromGet } from '@/lib/BuilderAPI';


import React, { useEffect, useState } from 'react';

const Page = () => {
    const {user}=useAuth();
    const[coverLetter,setCoverLetter]=useState({});
console.log(coverLetter);
   useEffect(()=>{
       coverLetterFromGet(user.email)
       .then((res)=>{
           setCoverLetter(res);
       })
   },[user])
    return (
        <div>
         <CoverLetter coverLetter={coverLetter}/>
        </div>
    );
};

export default Page;