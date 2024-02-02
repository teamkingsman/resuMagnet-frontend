"use client";
import useAuth from "@/hooks/useAuth";
import Cv from "./Cv";
import { useEffect, useState } from "react";
import { cvFromGet } from "@/lib/BuilderAPI";

const JoyTemplate = () => {
    const { user } = useAuth() ;
 
  const [cvData, setCvData] = useState({});
  console.log(cvData);
  useEffect(() => {
    cvFromGet(user?.email).then((res) => setCvData(res));
  }, [user]);
    return (
        <div>
           <Cv cvData={cvData}></Cv>
        </div>
    );
};

export default JoyTemplate;