"use client";
import useAuth from "@/hooks/useAuth";
import Resume from "./Resume";
import { useEffect, useState } from "react";
import { resumeFromGet } from "@/lib/BuilderAPI";

const JoyResume = () => {
  const { user } = useAuth();
  const [resumeData, setResumeData] = useState({});
  console.log(resumeData);
  useEffect(() => {
    resumeFromGet(user.email).then((res) => setResumeData(res));
  }, [user]);
  return (
    <div>
      <Resume resumeData={resumeData}></Resume>
    </div>
  );
};

export default JoyResume;
