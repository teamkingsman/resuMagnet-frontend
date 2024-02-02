
import Image from 'next/image';
import CvData from '/assets/diamond.json'
const ResumeDiamond = () => {
    const {
        basicInfo,
        education,
        employment,
        skills,
        languages,
        projects
      } = CvData;
    
      return (
        <div className="flex max-w-6xl bg-neutral-100 mx-auto mt-8">
          {/* Left Column - 1/3 */}
          <div className="w-1/3 pr-3 bg-[#1F618D]">
            <div className="mb-10 mt-6 flex justify-center items-center">
              <Image
                src={basicInfo.photoURL}
                alt="Profile"
                className="rounded-full"
                width={250}
                height={150}
              />
            </div>
            
            <p className='text-main text-xl font-bold text-center mt-8'>Contact</p>
            <p className="text-neutral-50 text-lg text-center">{basicInfo.email}</p>
            
            <p className="text-neutral-50 text-lg text-center">{basicInfo.phone}</p>
            <p className='text-main text-xl font-bold text-center mt-8'>Address</p>
            <p className="text-neutral-50 text-lg text-center">
              {basicInfo.street}, {basicInfo.city}, 
            </p>
            <p className="text-neutral-50 text-lg text-center">{basicInfo.country}</p>


            
          <div className="mb-8 mt-12 text-center text-neutral-50">
              <h2 className="text-xl font-bold text-main">Skills</h2>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <p>{skill.skill} - {skill.level}</p>
                </div>
              ))}
            </div>

            <div className="languages mt-6 text-center text-neutral-50">
          <h2 className="text-xl font-bold  text-main  py-2">Languages</h2>
          {languages.map((lang, index) => (
            <div key={index} className="mb-4">
              <p>{lang.language} - {lang.proficiency}</p>
            </div>
          ))}
        </div>
          </div>


    
          {/* Right Column - 2/3 */}
          <div className="w-2/3 px-5 py-10 border-r-8 border-t-8 border-b-8 border-[#1F618D]">
            <div className="mb-8">
            <h1 className="text-4xl font-bold mt-10 mb-3 text-main">{`${basicInfo.fname} ${basicInfo.lname}`}</h1>
            <p className="text-gray-600 text-2xl font-bold mb-10">{basicInfo.designation}</p>
              <h2 className="text-xl font-bold  text-neutral-50 bg-[#1F618D] pl-2 mb-4 py-2">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold">{edu.degree} - {edu.institute}</p>
                  <p>{`${edu.startDate} - ${edu.endDate}`}</p>
                  <p>{edu.jobDescription}</p>
                </div>
              ))}
            </div>
    
            
    
            {/* Add more sections as needed (e.g., employment, languages) */}
    
            <div className="mb-8">
              <h2 className="text-xl font-bold  text-neutral-50 bg-[#1F618D] pl-2 mb-4 py-2">Projects</h2>
              {projects.map((projGroup, groupIndex) => (
                <div key={groupIndex} className="mb-4">
                  {projGroup.map((project, projIndex) => (
                    <div key={projIndex} className="mb-4 p-4 border rounded">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p>{project.type}</p>
                      <p>{project.description}</p>
                      <p className=''>Live Link: {project.liveLink}</p>
                      <p className=''>GitHub Link: {project.githubLink}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="employment mt-6">
          <h2 className="text-xl font-bold  text-neutral-50 bg-[#1F618D] pl-2 mb-4 py-2">Employment</h2>
          {employment.map((job, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{job.jobTitle} - {job.employer}</p>
              <p>{`${job.startDate} - ${job.endDate}`}</p>
              <p>{job.jobDescription}</p>
            </div>
          ))}
        </div>
          </div>
        </div>
      );
    };

export default ResumeDiamond;