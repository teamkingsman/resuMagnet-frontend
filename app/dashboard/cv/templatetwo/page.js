"use client"
import useAuth from "@/hooks/useAuth";

import { useEffect, useState } from "react";
import {cvFromGet} from "@/lib/BuilderAPI";
import CVpaper from "./CVpaper";


const TemplateCv = () => {

    const {user} = useAuth();
    const [cv, setCv] = useState({})

     
    useEffect(()=>{
        cvFromGet(user.email)
        .then (res => setCv(res))
    }, [user])
    cvFromGet(cv)

    return (
        <div>
            <CVpaper cv={cv}></CVpaper>
            
        </div>
    );
};

export default TemplateCv;



