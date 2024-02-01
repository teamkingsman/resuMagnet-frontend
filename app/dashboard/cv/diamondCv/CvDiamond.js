import Image from 'next/image';
import CvData from '/assets/diamond.json'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const CvDiamond = () => {
    const { basicInfo, education, employment, skills, languages, projects } = CvData;

    return (
      <div className='bg-[#AEB6BF] py-20'>

<div
        className="cv-container px-5 lg:px-12 py-10 bg-neutral-50 mx-auto max-w-6xl"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        <div className="basic-info text-center text-main pb-5 border-b-4 mt-10">
        <Image
          src={basicInfo.photoURL}
          alt="Profile"
          className="rounded-full w-48 h-48 mx-auto mb-4"
          width={300} // Set the width of the image
          height={300} // Set the height of the image
        />
          <h1 className="text-3xl text-sub_color font-bold">{`${basicInfo.fname} ${basicInfo.lname}`}</h1>
          <p className='font-bold text-xl'>{basicInfo.designation}</p>
          <div className='lg:flex gap-20 justify-center items-center mt-3'>
          <div className='flex gap-2 justify-center'>
            <IoMailSharp className='text-lg text-[#FFDA33]'></IoMailSharp>
            
          <p>{basicInfo.email}</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
          <FaPhoneVolume className='text-lg text-[#3390FF]'></FaPhoneVolume>
          <p>{basicInfo.phone}</p>
          </div>
          </div>
        </div>
  
        <div className="education mt-6">
          <h2 className="text-xl font-bold  text-main bg-sub_color pl-2 mb-4 py-2">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{edu.degree} - {edu.institute}</p>
              <p>{`${edu.startDate} - ${edu.endDate}`}</p>
              <p>{edu.jobDescription}</p>
            </div>
          ))}
        </div>
  
        <div className="employment mt-6">
          <h2 className="text-xl font-bold  text-main bg-sub_color pl-2 mb-4 py-2">Employment</h2>
          {employment.map((job, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{job.jobTitle} - {job.employer}</p>
              <p>{`${job.startDate} - ${job.endDate}`}</p>
              <p>{job.jobDescription}</p>
            </div>
          ))}
        </div>
  
        <div className="skills mt-6">
          <h2 className="text-xl font-bold  text-main bg-sub_color pl-2 mb-4 py-2">Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <p>{skill.skill} - {skill.level}</p>
            </div>
          ))}
        </div>
  
        <div className="languages mt-6">
          <h2 className="text-xl font-bold  text-main bg-sub_color pl-2 mb-4 py-2">Languages</h2>
          {languages.map((lang, index) => (
            <div key={index} className="mb-4">
              <p>{lang.language} - {lang.proficiency}</p>
            </div>
          ))}
        </div>
  
        <div className="projects mt-6">
          <h2 className="text-xl font-bold text-main bg-sub_color pl-2 mb-4 py-2">Projects</h2>
          {projects.map((projGroup, index) => (
            <div key={index} className="project-group mt-4">
              {projGroup.map((project, projIndex) => (
                <div key={projIndex} className="project mb-4 p-4 border rounded">
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
  
  export default CvDiamond;