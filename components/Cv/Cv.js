
import Image from "next/image";
import cv from '../../assets/resume.json'

const Cv = () => {
  console.log(cv)
    return (
        <>
           <div className=" mt-8  font-serif   lg:w-[800px] h-[700px] mx-auto shadow-2xl ">
           
           <div className="flex">
            {/* left */}
           <div className="w-1/4 text-sm lg:text-lg mx-auto  lg:h-[600px] bg-slate-300  shadow-slate-400">
                  <div className=" ml-4">
              
                          {
                            cv.basicInfo.map((info,index)=>(
                              <div key={index}>
                              <div  className="mt-4">
  
                              <Image  src={info.photoURL}  alt="Sample Image"
                                width={100} height={100} />
                                   <h1 className="text-md font-bold mt-4">{info.fname} {info.lname}</h1>
                                   <p className="text-md font-semibold">{info.designation}</p>
                                   </div>
                                      <div className="mt-4">
                                      <h1 className="text-sm font-semibold underline">DATE OF BIRTH:</h1>
                                      <p className="text-sm font-semibold">{info.dob}</p>
                                      </div>
                                  
                          
                            
                     
                              <div className="text-sm">
                              <h1 className="text-sm font-semibold underline">Address</h1>
                              <p className="text-sm font-semibold">{info.street}{info.city}</p>
       
                              </div>
                           
    
                             
                          
                              <div  className="mt-4" >
                              <h1 className="text-sm font-semibold underline">CONTACT:</h1>
                              <h1 className="text-sm font-semibold">{info.email}</h1>
                              <p className="text-sm font-semibold">{info.phone}</p>
                              </div>
                              </div>
                            ))
                          }
                       
                  

                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">LANGUAGE:</h1>
                        {
                           cv.language.map((language,index)=>(
                            <div key={index}>
                            <p className="text-sm font-semibold">{language.language}</p>
                           <p  className="text-sm font-semibold">{language.proficiency}</p>
                           </div>
                           ))
                        }
                  
                         
                        
                        
                       </div>
                       {/* skills */}
                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">SKILLS:</h1>
                         <ul>
                           {
                             cv.skill.map((skill,index)=>(
                              <div key={index} >
                                <li  className="text-sm font-semibold">{skill.level}</li>
                                <li  className="text-sm font-semibold">{skill.skill}</li>
                              </div>


                             ))
                           }
                         </ul>
                       </div>
                     
                
                  </div>
            </div>

          {/* right */}
            <div className="w-3/4 h-[600px] bg-slate-50">
                  <div className="p-4">
                        <div >
                            <h1 className="mt-10 text-2xl font-bold text-center underline">CURRICULUM VITE</h1>
                         {
                          cv.basicInfo.map((info,index)=>(
                            <p key={index} className="text-md font-serif mt-4"> <span className=" font-bold">OBJECTIVE:</span>{info.about}</p>
                          ))
                         }
                       
                        </div>

                        <div className="mt-4 ">
                            <h1 className=" font-bold ">EDUCATION</h1>
                            <div className="space-y-2 bg-black">
                       <hr className=" h-1 "/>
                         </div>
                    
                         {
                           cv.education.map((education,index)=>(
                            <div key={index} className=" mt-2">
                                         <p  className="text-sm font-semibold">{education.degree}</p>
                             <p className="text-sm font-semibold">{education.institute}</p>
                             <p className="text-sm font-semibold">{education.ongoing}</p>
                             
                                 </div>
                                 ))
                              
                         }
                        
  
                        </div>
                        {/* experience */}
                        <div className="mt-4 ">
                            <h1 className=" font-bold ">EXPERIENCE</h1>
                            <div className="space-y-2 bg-black">
                           <hr className=" h-1 "/>    
                            </div>
                            <div className=" mt-2">
                           <div className=" py-4">
                            {
                              cv.employment.map((employment,index)=>(
                                <div key={index}>
                                <h2 className="text-sm font-semibold flex gap-8">{employment.startDate}  {employment.endDate}</h2>
                                <h1 className="text-lg font-semibold">{employment.jobTitle}</h1>
                                <h1 className="text-sm font-semibold">{employment.employer}</h1>
                                <p className="text-sm ">{employment.jobDescription}</p>
                                

                                </div>
                              ))
                                 
                             }

                           </div>

                            </div>
                        </div>
                 
                  </div>

            </div>
           </div>

           </div>
        </>
    );
};

export default Cv;