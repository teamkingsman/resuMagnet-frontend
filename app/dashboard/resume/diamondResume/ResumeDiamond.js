
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
            <div className="mb-4 mt-6 flex justify-center items-center">
              <Image
                src={basicInfo.photoURL}
                alt="Profile"
                className="rounded-full"
                width={250}
                height={150}
              />
            </div>
            
            
            <p className="text-neutral-50 text-lg text-center">{basicInfo.email}</p>
            <p className="text-neutral-50 text-lg text-center">{basicInfo.phone}</p>
            <p className="text-neutral-50 text-lg text-center">
              {basicInfo.street}, {basicInfo.city}, 
            </p>
            <p className="text-neutral-50 text-lg text-center">{basicInfo.country}</p>
          </div>
    
          {/* Right Column - 2/3 */}
          <div className="w-2/3 px-5 py-10">
            <div className="mb-8">
            <h1 className="text-2xl font-bold">{`${basicInfo.fname} ${basicInfo.lname}`}</h1>
            <p className="text-gray-600">{basicInfo.designation}</p>
              <h2 className="text-xl font-bold">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold">{edu.degree} - {edu.institute}</p>
                  <p>{`${edu.startDate} - ${edu.endDate}`}</p>
                  <p>{edu.jobDescription}</p>
                </div>
              ))}
            </div>
    
            <div className="mb-8">
              <h2 className="text-xl font-bold">Skills</h2>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <p>{skill.skill} - {skill.level}</p>
                </div>
              ))}
            </div>
    
            {/* Add more sections as needed (e.g., employment, languages) */}
    
            <div className="mb-8">
              <h2 className="text-xl font-bold">Projects</h2>
              {projects.map((projGroup, groupIndex) => (
                <div key={groupIndex} className="mb-4">
                  {projGroup.map((project, projIndex) => (
                    <div key={projIndex} className="mb-4 p-4 border rounded">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p>{project.type}</p>
                      <p>{project.description}</p>
                      <p>Live Link: {project.liveLink}</p>
                      <p>GitHub Link: {project.githubLink}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default ResumeDiamond;