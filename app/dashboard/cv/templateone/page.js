'use client'

import Cv from '@/components/Cv/Cv';
import useAuth from '@/hooks/useAuth';
import { cvFromGet } from '@/lib/BuilderAPI';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const {user}=useAuth();
    const[cv,setCv]=useState({});
console.log(cv);
   useEffect(()=>{
    cvFromGet(user.email)
       .then((res)=>{
           setCv(res);
       })
   },[user])
    return (
        <div>
       <Cv cv={cv}/>
        </div>
    );
};

export default Page;