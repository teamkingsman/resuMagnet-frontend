"use client";
import useAuth from "@/hooks/useAuth";
import Resume from "./Resume";
import { useEffect, useState } from "react";
import { resumeFromGet } from "@/lib/BuilderAPI";

const JoyResume = () => {
    const {user} = useAuth();
    const [resume, setResume] = useState({})

    console.log(resume);
    useEffect(()=>{
        resumeFromGet(user.email)
        .then (res => setResume(res))
    }, [user])
    resumeFromGet(resume)
  return (
    <div>
      <Resume resume={resume}></Resume>
    </div>
  );
};

export default JoyResume;
