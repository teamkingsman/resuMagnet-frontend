
const PremiumResume = ({resume}) => {
    // console.log(resume);
    const { basicInfo, education, employment, skill, language, projects } = resume;
    return (
        <>
           <div className="lg:w-[800px] font-serif p-8  h-[900px] mt-10 bg-slate-300 mx-auto shadow-2xl">
            {/* <div className="mt-4 ml-4">
                {/* personalInformation */}
           
                    <div >
                    <h1 className="text-2xl font-bold">{basicInfo?.fname} {basicInfo?.lname}</h1>
                    <p className="text-xl font-bold">{basicInfo?.designation}</p>
                    <div className="flex gap-8">
                     
                           <div>
                    <h2 className="">{basicInfo?.address}</h2>
                    <h2 className="">{basicInfo?.city}</h2>
                    <h1>{basicInfo?.phone} </h1>
                    <h2 className="">{basicInfo?.street}</h2>
                           </div>
                        <div>
                        <h1>{basicInfo?.email}</h1>
                       <h1>{basicInfo?.nationality}</h1>
                       <h1>{basicInfo?.dob}</h1>
                        </div>
                    </div>
                  
                    </div>
             
                {/* Experience */}
                <div  className="mt-4">
                 <h1 className="text-xl font-bold uppercase">Experience</h1>
                 <div className="space-y-2 w-[750px] mx-auto bg-black">
                <hr className=" h-1"/>
                </div>
              {
            
                employment?.map((employment,index)=>(
                   <div key={index}>
              
                    {/* horizontal */}
                   <h2 className="text-lg font-bold">{employment?.jobTitle}</h2>
                   <h2 className="text-lg font-bold">{employment?.employer}</h2>
                   <div className="flex gap-8">
                       <h2 className="text-md flex gap-8 ">{employment?.startDate}</h2>  <h2>{employment?.endDate}</h2>
                       <h2 className="text-md ">{employment?.location}</h2>

                   </div>
                   <ul className="list-disc ml-4">
                    <li>{employment?.jobDescription}</li>

                   </ul>
                </div>
               
                ))
              }
              </div>
              {/* project */}
              <div className="space-y-2 w-[750px] mx-auto bg-black">
                <hr className=" h-1"/>
                </div>
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

         {/* Education */}
             <h1 className="text-xl font-bold uppercase">Education</h1>
           <div className="space-y-2 w-[750px] mx-auto bg-black">
           <hr className=" h-1"/>
           </div>
            {
            education?.map((education,index)=>(
                <div key={index}>
                <h2>{education?.degree}</h2>
                <h2>{education?.institute}</h2>
                <div className="flex gap-8">
                <h2>{education?.endDate}</h2>
                <h2>{education?.ongoing}</h2>
                </div>
                </div>
            ))
            }
           {/* skills*/}
           <div>
           <h1 className="text-xl font-bold uppercase">Skills</h1>
           <div className="space-y-2 w-[750px] mx-auto bg-black">
           <hr className=" h-1"/>
           </div>
           <ul className='list-disc grid grid-cols-3 ml-4'>
       {
        skill?.map((skill,index)=>(
            <div key={index}>
                <h1>{skill?.level}</h1>
            <li  className='underline ml-4'>{skill?.skill}</li>
            </div>
      
          
        ))
       
       }
        </ul>
        </div>
        {/* LANGUAGE */}
        <div>
           <h1 className="text-xl font-bold uppercase">Language</h1>
           <div className="space-y-2 w-[750px] mx-auto bg-black">
           <hr className=" h-1"/>
           </div>
           <ul  className="">
      {
        language?.map((language,index)=>(
          
          <div key={index} className='flex gap-8'>
              <li >{language?.language}</li>
              <li >{(language?.proficiency)}</li>
          </div>
  
      
        ))
      }
            </ul>
        </div>

            {/* </div> */} 
    
       
            </div> 
        </>
    );
};

export default PremiumResume;