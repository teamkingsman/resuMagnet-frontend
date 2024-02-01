
import Image from "next/image";
import cv from "/public/cv.json"

const Cv = () => {
  
    return (
        <>
           <div className=" mt-8  font-serif   lg:w-[800px] h-[700px] mx-auto shadow-2xl ">
           
           <div className="flex">
            {/* left */}
           <div className="w-1/4 text-sm lg:text-lg mx-auto  lg:h-[600px] bg-slate-300  shadow-slate-400">
                  <div className=" ml-4">
                 
                       {
                        cv.personalInformation.map((info,index)=>(
                          <>
                          <div key={index} className="mt-4">
  
                          <Image  src={info.img}  alt="Sample Image"
                            width={100} height={100} />
                               <h1 className="text-md font-bold mt-4">{info.firstName} {info.lastName}</h1>
                               <p className="text-md font-semibold">{info.position}</p>
                               </div>
                                  <div className="mt-4">
                                  <h1 className="text-sm font-semibold underline">DATE OF BIRTH:</h1>
                                  <p className="text-sm font-semibold">{info.dateOfBirth}</p>
                                  </div>
                                  </>
                        ))
                       }
                        {
                        cv.address.map((address,index)=>(
                          <div key={index} className="text-sm">
                          <h1 className="text-sm font-semibold underline">Address</h1>
                          <p className="text-sm font-semibold">{address.street}{address.city}</p>
   
                          </div>
                        ))
                        }

                         {
                         cv.contact.map((contact,index)=>(
                          <div key={index} className="mt-4" >
                          <h1 className="text-sm font-semibold underline">CONTACT:</h1>
                          <h1 className="text-sm font-semibold">{contact.email}</h1>
                          <p className="text-sm font-semibold">{contact.phone}</p>
                          </div>
                         ))
                         }
                       {
                        
                       }

                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">LANGUAGE:</h1>
                        {
                        cv.languages.map((language,index)=>(
                          <p key={index} className="text-sm font-semibold">{language}</p>
                        ))
                        }
                       </div>
                       {/* skills */}
                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">SKILLS:</h1>
                         <ul>
                           {
                             cv.skills.map((skill,index)=>(
                              <div key={index} >
                                <li  className="text-sm font-semibold">{skill.technical}</li>
                                <li  className="text-sm font-semibold">{skill.soft}</li>
                              </div>


                             ))
                           }
                         </ul>
                       </div>
                       {/* Interest */}
                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">INTEREST:</h1>
                       {
                         cv.interests.map((interest,index)=>(
                          <p key={index} className="text-sm font-semibold">{interest}</p>
                         ))
                       }
                       </div>
                
                  </div>
            </div>

          {/* right */}
            <div className="w-3/4 h-[600px] bg-slate-50">
                  <div className="p-4">
                        <div >
                            <h1 className="mt-10 text-2xl font-bold text-center underline">CURRICULUM VITE</h1>
                      <p className="text-md font-serif mt-4"> <span className=" font-bold">OBJECTIVE:</span>{cv.objective}</p>
                       
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
                             <p className="text-sm font-semibold">{education.institution}</p>
                             
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
                           <div className="flex gap-12 py-4">
                            {
                              cv.experience.map((experience,index)=>(
                                <div key={index}>
                                <h2 className="text-sm font-semibold">{experience.startDate} {experience.endDate}</h2>
                                <h1 className="text-sm font-semibold">{experience.company}</h1>
                                <h1 className="text-sm font-semibold">{experience.position}</h1>
                                <p className="text-sm font-semibold">{experience.description}</p>
                                

                                </div>
                              ))
                                 
                             }

                           </div>

                            </div>
                        </div>
                        {/* experience */}
                        {/* Extra CURRICULUM */}
                        <div className="mt-2 ">
                            <h1 className=" font-bold ">EXTRA CURRICULUM EXPERIENCE & AWARDS</h1>
                            <div className="space-y-2 bg-black">
                           <hr className=" h-1 "/>    
                            </div>
                            <div className="space-y-2 ml-4">
                            <ul className="list-disc">
                                {
                                  cv.extracurricular.map((extraCurriculum,index)=>(
                                    <li key={index} className="text-sm font-semibold">{extraCurriculum.responsibilities} </li>
                                   
                                  ))
                                }
                            </ul>
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