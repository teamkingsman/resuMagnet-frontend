'use client'
import { useEffect } from "react";


const ResumeData = ({setData,setLoading}) => {

    useEffect(()=>{
        fetch('data.json') // Replace with your API endpoint URL
        .then(response => response.json())
        .then((data) =>{
            setData(data);
            setLoading(false);
        } )
        
    },[setData,setLoading])

    // console.log(data);
    return (
       <h1>Loading..</h1>
    );
};
export default ResumeData;