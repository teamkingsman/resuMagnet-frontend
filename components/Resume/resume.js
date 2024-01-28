import React from 'react';

const Resume = ({data}) => {
    console.log(data);
    const{personalInformation,summary,education,experience,skills,projects,languages,certifications}=data;
    return (
        <>
             <div className=" font-serif  lg:w-[800px] h-[1200px] mx-auto shadow-2xl bg-slate-300">
                <div className="flex justify-between ">
                         <div className="ml-8 mt-8">
                          <h2 className="text-xl font-bold"></h2>
                          <h1 className="text-xl font-bold">Web developer</h1>
                          <h1 className="text-xl font-bold">{personalInformation[0].firstName} {personalInformation[0].lastName} </h1>
                         </div>
                         <div className="mr-4 mt-8">
                            <h2>Email:{personalInformation[0].email}</h2>  
                            <h2>Contact:{personalInformation[0].phone}</h2>  
                            <h2>Address:{personalInformation[0].address}</h2>  
                           
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
                        <p className=" justify-center text-md">{summary}</p>
                      </div>
                      {/* skills */}
                      <div className="mt-4">
                             <h2 className="text-2xl font-bold">Skills</h2>
                             <div className="text-md">
                                <p>Experts:{skills[0]} | {skills[1]} | {skills[2]} | {skills[3]} | React.js | Daisyui</p>
                                <p>Comfortable: {skills[4]} | {skills[5]}  | {skills[7]} | JWT</p>
                                <p>Familiar:{skills[6]}</p>
       
                             </div>
                      </div>
                         {/* Experience */}
                      <div className="mt-4">

                             <h2 className="text-2xl font-bold mb-2">Experience:</h2>
                             <div className="flex justify-between">
                                <h2 className="text-xl font-bold">{experience[0].company}</h2>
                                <h2>City, State</h2>
                             </div>
                             <div className="flex justify-between">
                             <h2 className="text-lg font-bold">{experience[0].position}</h2> 
                              <h3>{experience[0].endDate}</h3>
                             </div>
                             <div className="ml-8">
                                  
                                  <ul className="list-disc">
                                  <li className="text-md">{experience[0].responsibilities[0]} </li>
                                  <li className="text-md">{experience[0].responsibilities[1]} </li>
                                  <li className="text-md">{experience[0].responsibilities[2]} </li>
                                 </ul>
                             </div>

                      </div>
                      <div className="mt-4">
                       
                              
                             <div className="flex justify-between">
                                <h2 className="text-xl font-bold">{experience[1].company}</h2>
                                <h2>City, State</h2>
                             </div>
                             <div className="flex justify-between">
                             <h2 className="text-lg font-bold">{experience[1].position}</h2> 
                              <h3>{experience[1].endDate}</h3>
                             </div>
                             <div className="ml-8">
                                  
                                  <ul className="list-disc">
                                  <li className="text-md">{experience[1].responsibilities[0]} </li>
                                  <li className="text-md">{experience[1].responsibilities[1]} </li>
                                  <li className="text-md">{experience[1].responsibilities[2]} </li>
                                 </ul>
                             </div>

                      </div>
                      {/* Project */}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Project</h1>
                             <h2 className="text-lg font-bold">{projects[0].name}</h2>
                             <ul className="list-disc px-4 ml-4">
                             <li className='text-md'>{projects[0].description}</li>
                             </ul>
                             <p className=""> <span className="text-md font-bold">Technologies</span>:{projects[0].technologies[0]} {projects[0].technologies[1]} {projects[1].technologies[2]}
                               {projects[0].technologies[3]} {projects[0].technologies[4]}</p>
                      </div>
                        
                      <div className="mt-4">
                    
                             <h2 className="text-lg font-bold">{projects[1].name}</h2>
                             <ul className="list-disc px-4 ml-4">
                             <li className='text-md'>{projects[1].description}</li>
                             </ul>
                             <p className=""> <span className="text-md font-bold">Technologies</span>:{projects[1].technologies[0]} {projects[1].technologies[1]} {projects[1].technologies[2]}
                               {projects[1].technologies[3]} {projects[1].technologies[4]}</p>
                      </div>
                      {/* certifications */}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Certification:</h1>
                             <h2 className="text-lg font-bold">{certifications[0].name}</h2>
                             <div className="flex justify-between">
                             <p className="text-md">{certifications[0].organization}</p>
                             <p className="text-md">{certifications[0].date}</p>
                             </div>
                      </div>
                      {/* Education*/}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Education:</h1>
                             <h2 className="text-lg font-bold">{education[0].degree}</h2>
                             <div className="flex justify-between">
                             <p className="text-md">{education[0].school}</p>
                             <p className="text-md">{education[0].graduationYear}</p>
                             </div>
                      </div>
                      {/* <Education/> */}
                      {/* LANGUAGE */}
                      <div className="mt-4">
                        <h1 className="text-xl font-bold">Language:</h1>
                             <div className=" flex gap-4">
                             <h2 className="text-md ">{languages[0]}</h2> |
                             <h2 className="text-md ">{languages[1]}</h2>
                             </div>
                      </div>

                </div>
            </div>
        </>
    );
};

export default Resume;