"use client"
import useAuth from "@/hooks/useAuth";

import { useEffect, useState } from "react";
import {cvFromGetbyEmail} from "@/lib/BuilderAPI";
import CVpaper from "./CVpaper";


const TemplateCv = () => {

    const {user} = useAuth();
    const [cv, setCv] = useState({})

     
    useEffect(()=>{
        cvFromGetbyEmail(user.email)
        .then (res => setCv(res))
    }, [user])
    cvFromGetbyEmail(cv)

    return (
        <div>
            <CVpaper cv={cv}></CVpaper>
            
        </div>
    );
};

export default TemplateCv;



