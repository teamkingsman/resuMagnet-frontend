import React, { useEffect } from 'react';

const CoverLetterData = ({setItem,setLoading}) => {
    useEffect(()=>{
        fetch('coverLetter.json') // Replace with your API endpoint URL
        .then(response => response.json())
        .then((item) =>{
            setItem(item);
            setLoading(false);
        } )
        
    },[setItem,setLoading])

    return (
        <>
           <h1>Loading..</h1> 
        </>
    );
};

export default CoverLetterData;