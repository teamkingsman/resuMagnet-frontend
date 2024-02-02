import Image from "next/image";

import cv from '../../assets/resume.json';
const CvTwo = () => {
   console.log(cv);
    return (
        <>
             <div className=" mt-8 font-serif bg-slate-400  lg:w-[800px] h-[700px] mx-auto shadow-2xl ">
           
               <div className="p-4 ml-4">
          
                {
                  cv.basicInfo.map((info,index)=>(
                     <div key={index} className="mt-4 ">
                        <div>
                     <h1 className="text-3xl font-bold ">{info.fname}  {info.lname}</h1>
                     <h1 className="text-xl font-bold ">{info.designation}</h1>
                     <div className="flex mt-4 justify-between">
                     <div className="">
                     <h1 className="text-md  ">{info.email}</h1>
                     <h1 className="text-md ">{info.phone}</h1>
                     <h1 className="text-md  ">Date of birth:{info.dob}</h1>
                     <h1 className="text-md  ">nationality:{info.nationality}</h1>
                     </div>

                     <div>
                     <h1 className="text-md ">Country:{info.country}</h1>
                     <h1 className="text-md  ">City:{info.city}</h1>
                     <h1 className="text-md  ">postal code:{info.postal}</h1>
                     </div>
                    
                     <div>
                    
                     <Image className="-mt-20" src={info.photoURL}  alt="Sample Image"
                        width={150} height={200} />
                     </div>
        
                     </div>
                     <div className="space-y-4 w-[750px] mx-auto bg-black">
                   <hr className=" h-1"/>
                      </div>
                 </div>
                
               
              
             {/* personalInformation */}
             {/* objective */}
             <div>
                 <h1 className="text-xl font-bold">summary:</h1>
                 <div>
                    <p>{info.about}</p>
                 </div>
                </div>   
                </div>   
           ))
                  
         }
            {/* experience */}
            <h1 className="text-xl font-bold">Experience:</h1>
            <div className="space-y-1 w-[750px] mx-auto bg-black  ">
                         <hr className=" h-1"/>
             </div>
             {
               cv.employment.map((employment,index)=>(
                  <div key={index}>

                
           
                  <div className="flex gap-8">
                  <h1 className="text-md font-bold">{employment.startDate}</h1>
                   <div>
  
                   <h1 className="text-md font-bold">{employment.jobTitle}</h1>
                  <h1 className="text-md font-bold">{employment.employer}</h1>
                  <p>{employment.jobDescription}</p>
                   </div>
                  </div>
  
                </div>
               ))
             }
              {/* education */}
              <div>
               <h1 className="text-xl font-bold">Education:</h1>
           
                
               {
                  cv.education.map((education,index)=>(
                     <div key={index} className="flex gap-8">
                     <h1 className="text-md font-bold">{education.startDate}</h1>
                      <div>
     
                      <h1 className="text-md font-bold">{education.degree}</h1>
                     <h1 className="text-md font-bold">{education.institute}</h1>
                
                      </div>
                     </div>
                     ))
               }

               </div>
               {/* skills */}
               <div>
               <h1 className="text-xl font-bold">Skills:</h1>
               <hr className="bg-black"/>
                    {
                      cv.skill.map((skill,index)=>(
                        <div key={index} className="ml-28">
                        <h1 className="text-md">{skill.skill}</h1>
                    
                    </div>
                      ))
                    }
               </div>
               {/* language */}
               <div>
               <h1 className="text-xl font-bold">Language:</h1>
              
                   {
                     cv.language.map((language,index)=>(
                        <div key={index} className="ml-28 ">
                        <div className="flex gap-8">
                      
                        <h1 className="text-md">{language.language}</h1>
                        <h1 className="text-md">{(language.proficiency)}</h1>
                        </div>
                        
                     </div>
                     ))
                   }
               </div>
             </div>
             </div>

        </>
    );
};

export default CvTwo;