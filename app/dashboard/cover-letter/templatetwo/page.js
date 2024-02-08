"use client"
import useAuth from "@/hooks/useAuth";

import { useEffect, useState } from "react";
import { coverLetterFromGet} from "@/lib/BuilderAPI";
import Letter from "./Letter";




const TemplateTwo = () => {
    const {user} = useAuth();
    const [cover, setCover] = useState({})

     
    useEffect(()=>{
        coverLetterFromGet(user.email)
        .then (res => setCover(res))
    }, [user])
    coverLetterFromGet(cover)

    return (
        <div className="bg-[#808080]">
            {/* <h2>TemplateTwo</h2> */}
            <Letter cover={cover}></Letter>

            
        </div>
    );
};

export default TemplateTwo;


