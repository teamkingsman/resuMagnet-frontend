"use client"
import useAuth from "@/hooks/useAuth";

import { useEffect, useState } from "react";
import {resumeFromGetByEmail} from "@/lib/BuilderAPI";

import Resumes from "./Resumes";


const TemplateResume = () => {
    
    const {user} = useAuth();
    const [resume, setResume] = useState({})

     
    useEffect(()=>{
        resumeFromGetByEmail(user.email)
        .then (res => setResume(res))
    }, [user])
    resumeFromGetByEmail(resume)
    return (
        <div>
            <Resumes resume={resume}></Resumes>
            
        </div>
    );
};

export default TemplateResume;







    
   

