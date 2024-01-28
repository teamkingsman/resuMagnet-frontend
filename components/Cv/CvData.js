"use client"
import { useEffect, useState } from "react";
import Cv from "./Cv";


const CvData = () => {
    const [cvData, setCvData]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        fetch('cv.json') // Replace with your API endpoint URL
        .then(response => response.json())
        .then((item) =>{
            setCvData(item);
            setLoading(false);
        } )
        
    },[])
    console.log(cvData);
    return (
        <>
            {
                loading ?<span className="loading loading-spinner loading-lg"></span> : <Cv cvData={cvData}/>
            }
        </>
    );
};

export default CvData;