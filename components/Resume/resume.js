import React from 'react';
import resume from '/public/data.json'
const Resume = () => {
 
    return (
        <>
             <div className=" font-serif  lg:w-[800px] h-[1200px] mx-auto shadow-2xl bg-slate-300">
                <div className="flex justify-between ">
                         <div className="ml-8 mt-8">
                          <h2 className="text-xl font-bold"></h2>
                          <h1 className="text-xl font-bold">Web developer</h1>
                          <h1 className="text-xl font-bold">{resume.personalInformation[0].firstName} {resume.personalInformation[0].lastName} </h1>
                         </div>
                         <div className="mr-4 mt-8">
                            <h2>Email:{resume.personalInformation[0].email}</h2>  
                            <h2>Contact:{resume.personalInformation[0].phone}</h2>  
                            <h2>Address:{resume.personalInformation[0].address}</h2>  
                           
                         </div>
                </div>
                {/* horizontal */}
                <div className="space-y-4 w-[750px] mx-auto bg-cyan-600">
                <hr className="mt-4 h-2  "/>
                </div>
                {/* career */}
                <div className="ml-8 mr-4">
                      <div className="mt-4">
                        <h2 className="text-2xl font-bold ">CAREER OBJECTIVE</h2>
                        <p className=" justify-center text-md">{resume.summary}</p>
                      </div>
                      {/* skills */}
                      <div className="mt-4">
                             <h2 className="text-2xl font-bold">Skills</h2>
                             <div className="text-md">
                                <p>Experts:{resume.skills[0]} | {resume.skills[1]} | {resume.skills[2]} | {resume.skills[3]} | React.js | Daisyui</p>
                                <p>Comfortable: {resume.skills[4]} | {resume.skills[5]}  | {resume.skills[7]} | JWT</p>
                                <p>Familiar:{resume.skills[6]}</p>
       
                             </div>
                      </div>
                         {/* Experience */}
                      <div className="mt-4">

                             <h2 className="text-2xl font-bold mb-2">Experience:</h2>
                             <div className="flex justify-between">
                                <h2 className="text-xl font-bold">{resume.experience[0].company}</h2>
                                <h2>City, State</h2>
                             </div>
                             <div className="flex justify-between">
                             <h2 className="text-lg font-bold">{resume.experience[0].position}</h2> 
                              <h3>{resume.experience[0].endDate}</h3>
                             </div>
                             <div className="ml-8">
                                  
                                  <ul className="list-disc">
                                  <li className="text-md">{resume.experience[0].responsibilities[0]} </li>
                                  <li className="text-md">{resume.experience[0].responsibilities[1]} </li>
                                  <li className="text-md">{resume.experience[0].responsibilities[2]} </li>
                                 </ul>
                             </div>

                      </div>
                      <div className="mt-4">
                       
                              
                             <div className="flex justify-between">
                                <h2 className="text-xl font-bold">{resume.experience[1].company}</h2>
                                <h2>City, State</h2>
                             </div>
                             <div className="flex justify-between">
                             <h2 className="text-lg font-bold">{resume.experience[1].position}</h2> 
                              <h3>{resume.experience[1].endDate}</h3>
                             </div>
                             <div className="ml-8">
                                  
                                  <ul className="list-disc">
                                  <li className="text-md">{resume.experience[1].responsibilities[0]} </li>
                                  <li className="text-md">{resume.experience[1].responsibilities[1]} </li>
                                  <li className="text-md">{resume.experience[1].responsibilities[2]} </li>
                                 </ul>
                             </div>

                      </div>
                      {/* Project */}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Project</h1>
                             <h2 className="text-lg font-bold">{resume.projects[0].name}</h2>
                             <ul className="list-disc px-4 ml-4">
                             <li className='text-md'>{resume.projects[0].description}</li>
                             </ul>
                             <p className=""> <span className="text-md font-bold">Technologies</span>:{resume.projects[0].technologies[0]} {resume.projects[0].technologies[1]} {resume.projects[1].technologies[2]}
                               {resume.projects[0].technologies[3]} {resume.projects[0].technologies[4]}</p>
                      </div>
                        
                      <div className="mt-4">
                    
                             <h2 className="text-lg font-bold">{resume.projects[1].name}</h2>
                             <ul className="list-disc px-4 ml-4">
                             <li className='text-md'>{resume.projects[1].description}</li>
                             </ul>
                             <p className=""> <span className="text-md font-bold">Technologies</span>:{resume.projects[1].technologies[0]} {resume.projects[1].technologies[1]} {resume.projects[1].technologies[2]}
                               {resume.projects[1].technologies[3]} {resume.projects[1].technologies[4]}</p>
                      </div>
                      {/* certifications */}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Certification:</h1>
                             <h2 className="text-lg font-bold">{resume.certifications[0].name}</h2>
                             <div className="flex justify-between">
                             <p className="text-md">{resume.certifications[0].organization}</p>
                             <p className="text-md">{resume.certifications[0].date}</p>
                             </div>
                      </div>
                      {/* Education*/}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Education:</h1>
                             <h2 className="text-lg font-bold">{resume.education[0].degree}</h2>
                             <div className="flex justify-between">
                             <p className="text-md">{resume.education[0].school}</p>
                             <p className="text-md">{resume.education[0].graduationYear}</p>
                             </div>
                      </div>
                      {/* <Education/> */}
                      {/* LANGUAGE */}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Language:</h1>
                             <div className=" flex gap-4">
                             <h2 className="text-md ">{resume.languages[0]}</h2> |
                             <h2 className="text-md ">{resume.languages[1]}</h2>
                             </div>
                      </div>

                </div>
            </div>
        </>
    );
};

export default Resume;