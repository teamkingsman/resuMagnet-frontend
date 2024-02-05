"use client"
import useAuth from "@/hooks/useAuth";
import CvDiamond from "./CvDiamond";
import { useEffect, useState } from "react";
import { cvFromGet } from "@/lib/BuilderAPI";


const DiamondCv = () => {
    const {user} = useAuth();
    const [cv, setCV] = useState({})

    useEffect(()=>{
        cvFromGet(user.email)
        .then (res => setCV(res))
    }, [user])
    cvFromGet(cv)
    return (
        <div>
            <CvDiamond cv={cv}></CvDiamond>
            
        </div>
    );
};

export default DiamondCv;