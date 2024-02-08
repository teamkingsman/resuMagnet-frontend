"use client"
import useAuth from "@/hooks/useAuth";

import { useEffect, useState } from "react";
import {resumeFromGet} from "@/lib/BuilderAPI";

import Resumes from "./Resumes";


const TemplateResume = () => {
    
    const {user} = useAuth();
    const [resume, setResume] = useState({})

     
    useEffect(()=>{
        resumeFromGet(user.email)
        .then (res => setResume(res))
    }, [user])
    resumeFromGet(resume)
    return (
        <div>
            <Resumes resume={resume}></Resumes>
            
        </div>
    );
};

export default TemplateResume;







    
   

