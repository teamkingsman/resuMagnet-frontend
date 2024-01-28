
"use client"
import React, { useEffect, useState } from 'react';
import Resume from './Resume';


const ResumeData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
                fetch('data.json') // Replace with your API endpoint URL
                .then(response => response.json())
                .then((data) =>{
                    setData(data);
                    setLoading(false);
                } )
                
            },[])
        
            console.log(data);
    return (
        <div>
           {
            loading ?<span className="loading loading-spinner loading-lg"></span> : <Resume data={data} />
           }
                
        </div>
    );
};

export default ResumeData;