import React from 'react';
import CvData from '../../assets/resume.json'
const Resume = () => {
  console.log(CvData);
  const { basicInfo, education, employment, skill, language, projects } = CvData;
    return (
        <>
             <div className=" font-serif  lg:w-[800px] h-[1200px] mx-auto shadow-2xl bg-slate-300">
               
                         
                       
                                <>
                                 <div className="flex justify-between ">
                     
                     
                                    <div className="ml-8 mt-8">
                          <h2 className="text-xl font-bold"></h2>
                          <h1 className="text-xl font-bold">{basicInfo?.designation}</h1>
                          {/* <h1 className="text-xl font-bold">{basicInfo?.fname} {basicInfo.lname} </h1> */}
                         </div>
                        <div className="mr-4 mt-8"> 
                                <div >
                                   <h2>Email:{basicInfo?.email}</h2> 
                                   <h2>Contact:{basicInfo?.phone}</h2>
                                   <h2>Address:{basicInfo?.street}</h2>
                                </div>
                                </div>
                </div> 
                                </>
                           
                {/* horizontal */}
                <div className="space-y-4 w-[750px] mx-auto bg-black">
                <hr className="mt-4 h-1  "/>
                </div>
                {/* career */}
                <div className="ml-8 mr-4">
                   
                        <div  className="mt-4">
                        <h2 className="text-2xl font-bold ">CAREER OBJECTIVE</h2>
                        <p className=" justify-center text-md">{basicInfo.about}</p>
                      </div>
                     

                      {/* skills */}
                      <div className="mt-4">
                             <h2 className="text-2xl font-bold">Skills</h2>
                             <div className="space-y-2 w-[750px] mx-auto bg-black">
                <hr className=" h-1"/>
                </div>
                             <div className="text-md">
                                <ul className='grid grid-cols-3'>
                                  {
                                    skill?.map((skill,index)=>(
                                         <li key={index}>{skill?.skill}</li>
                                    ))
                                  } 
                                 </ul>
                             </div>
                      </div>
                         {/* Experience */}
                      <div className="mt-4">

                             <h2 className="text-2xl font-bold mb-2">Experience:</h2>
                             {
                              employment?.map((employment, index) => (
                                 <>
                                 <div key={index} className="flex justify-between">
                                 <h2 className="text-lg font-bold">{employment?.employer}</h2>
                                 {/* <h2>{experience.location}</h2> */}
                              </div>
                                 <div key={index} className="flex justify-between">
                                 <h2 className="text-md font-bold">{employment?.jobTitle}</h2>
                               
                                  <h3>{employment?.endDate}</h3>
                                 </div>
                                 <div className="ml-8">
                                  
                                  <ul className="list-disc">
                                  <li>{employment?.jobDescription}</li>
                                
                                 </ul>
                             </div>
                                 </>
                              ))
                             }

                      </div>
                     
                      {/* Project */}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Project</h1>
                           
                             {
                               projects?.map((project, index) => (
                                 <div key={index}>
                                     <h2 className="text-lg font-bold">{project?.title}</h2>
                                     <div className='flex gap-8 underline'>
                                    <h1 className="text-lg font-bold">{project?.liveLink}</h1>
                                    <h1 className="text-lg font-bold">{project?.githubLink}</h1>
                                    </div>
                             <ul className="list-disc px-4 ml-4">
                             <li className='text-md'>{project?.description}</li>
                             </ul>
                             <p className=""> <span className="text-md font-bold">Technologies</span>:{project?.type} </p>
                                 </div>
                               ))
                             }
                      </div>
                        
                  
                      {/* certifications */}
                      {/* <div className="mt-4">
                        <h1 className="text-xl font-bold">Certification:</h1>
                       
                             {
                                  resume.certifications.map((certification, index) => (
                                    <div key={index}>
                               <h2 className="text-lg font-bold">{certification.name}</h2>
                             <div className="flex justify-between">
                             <p className="text-md">{certification.organization}</p>
                             <p className="text-md">{certification.date}</p>
                             </div>
                                    </div>
                                  ))
                             }
                      </div> */}
                      {/* Education*/}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Education:</h1>
                         
                             {
                                    education?.map((education, index) => (
                                       <div key={index}>
                                        <h2 className="text-lg font-bold">{education?.degree}</h2>
                             <div className="flex justify-between">
                             <p className="text-md">{education?.institute}</p>
                             <p className="text-md">{education?.ongoing}</p>
                             </div>
                                       </div>
                                    ))
                             }
                      </div>
                      {/* <Education/> */}
                      {/* LANGUAGE */}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Language:</h1>
                            {
                                    language?.map((language, index) => (
                                       <div key={index} className=" flex gap-4">
                                       <h2 className="text-md ">{language?.language}</h2> |
                                       <h2 className="text-md ">{language?.proficiency}</h2> |
                        
                             </div>
                                    ))
                            }
                      </div>

                </div>
            </div>
        </>
    );
};

export default Resume;