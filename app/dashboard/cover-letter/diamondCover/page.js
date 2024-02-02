"use client"
import useAuth from "@/hooks/useAuth";

import { useEffect, useState } from "react";
import { coverLetterFromGet} from "@/lib/BuilderAPI";

import CoverDiamond from "./CoverDiamond";


const DiamondCover = () => {

    const {user} = useAuth();
    const [cover, setCover] = useState({})

     
    useEffect(()=>{
        coverLetterFromGet(user.email)
        .then (res => setCover(res))
    }, [user])
    coverLetterFromGet(cover)

    return (
        <div className="bg-[#AEB6BF] py-20">
            <CoverDiamond cover={cover}></CoverDiamond>
            
        </div>
    );
};

export default DiamondCover;




    
   

