
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
                       <div className="mt-4">
  
                  <Image  src={cv.personalInformation[0].img}  alt="Sample Image"
                    width={100} height={100} />
                       <h1 className="text-md font-bold mt-4">{cv.personalInformation[0].firstName} {cv.personalInformation[0].lastName}</h1>
                       <p className="text-md font-semibold">{cv.personalInformation[0].position}</p>
                       </div>
                       <div className="text-sm">
                       <h1 className="text-sm font-semibold underline">Address</h1>
                    <p className="text-sm font-semibold">{cv.address[0].street}{cv.address[0].city}</p>

                       </div>

                       <div className="mt-4" >
                       <h1 className="text-sm font-semibold underline">CONTACT:</h1>
                       <h1 className="text-sm font-semibold">{cv.contact[0].email}</h1>
                       <p className="text-sm font-semibold">{cv.contact[0].phone}</p>
                       </div>
                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">DATE OF BIRTH:</h1>
                       <p className="text-sm font-semibold">{cv.personalInformation[0].dateOfBirth}</p>
                       </div>

                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">LANGUAGE:</h1>
                       <p className="text-sm font-semibold">{cv.languages[0]} {cv.languages[1]}</p>
                       </div>
                       {/* skills */}
                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">SKILLS:</h1>
                       <p className="text-sm font-semibold">{cv.skills[0].technical[0]} {cv.skills[0].technical[1]}</p>
                       <p className="text-sm font-semibold">{cv.skills[0].technical[2]} {cv.skills[0].technical[3]}</p>
                       <p className="text-sm font-semibold">{cv.skills[0].technical[4]} {cv.skills[0].technical[5]}</p>
                       </div>
                       {/* Interest */}
                       <div className="mt-4">
                       <h1 className="text-sm font-semibold underline">INTEREST:</h1>
                       <p className="text-sm font-semibold">{cv.interests}</p>
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
                         <div className=" mt-2">
                         <h2 className="text-sm font-semibold">{cv.education[0].degree}</h2>

                         <p className="text-sm font-semibold">{cv.education[0].institution}</p>
                         </div>
                         <div className="mt-2">
                         <h2 className="text-sm font-semibold">{cv.education[1].degree}</h2>

                          <p className="text-sm font-semibold">{cv.education[1].institution}</p>
                         </div>
                        </div>
                        {/* experience */}
                        <div className="mt-4 ">
                            <h1 className=" font-bold ">EXPERIENCE</h1>
                            <div className="space-y-2 bg-black">
                           <hr className=" h-1 "/>    
                            </div>
                            <div className=" mt-2">
                           <div className="flex gap-12 py-4">
                                 <div>
                                 <h2 className="text-sm font-semibold">{cv.experience[0].startDate} {cv.experience[0].endDate}</h2>
                                 <h2 className="text-sm font-semibold">{cv.experience[1].startDate} {cv.experience[1].endDate}</h2>


                                 </div>
                                 <div>
                                 <h1 className="text-sm font-semibold">{cv.experience[0].company} {cv.experience[0].position}</h1>
                                 <h1 className="text-sm font-semibold">{cv.experience[1].company} {cv.experience[1].position}</h1>

                                 </div>

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
                            <li className="text-sm font-semibold">{cv.extracurricular[0].responsibilities} </li>
                            <li className="text-sm font-semibold">{cv.extracurricular[1].responsibilities}</li>
                            <li className="text-sm font-semibold">Winter of Photography competition</li>
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