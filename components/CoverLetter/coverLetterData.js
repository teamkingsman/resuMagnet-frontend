'use client'
import { useEffect, useState } from "react";
import CoverLetter from "./coverLetter";

const CoverLetterData = () => {
    const[item,setItem]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('coverLetter.json') // Replace with your API endpoint URL
        .then(response => response.json())
        .then((item) =>{
            setItem(item);
            setLoading(false);
        } )
        
    },[])
    return (
        <>
       {
        loading? <span className="loading loading-spinner loading-lg"></span>: <CoverLetter item={item}/>
       }
        </>
    );
};

export default CoverLetterData;