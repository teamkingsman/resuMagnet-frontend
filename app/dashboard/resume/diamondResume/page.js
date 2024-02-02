"use client"
import useAuth from "@/hooks/useAuth";

import { useEffect, useState } from "react";
import { resumeFromGet } from "@/lib/BuilderAPI";

import ResumeDiamond from "./ResumeDiamond";


const DiamondResume = () => {

    const {user} = useAuth();
    const [resume, setResume] = useState({})

    
    useEffect(()=>{
        resumeFromGet(user.email)
        .then (res => setResume(res))
    }, [user])
    resumeFromGet(resume)


    return (
        <div className="bg-[#AEB6BF] py-20">
            <ResumeDiamond resume={resume}></ResumeDiamond>
            
        </div>
    );
};

export default DiamondResume;


