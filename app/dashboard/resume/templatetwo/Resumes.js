import coverLetterData from '/assets/cover.json';
import './Resumes.css'; // Import the CSS file
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import Image from 'next/image';

const Resumes = () => {
  return (
    <div className="resume-container w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
      {/* Left Part (1/3) */}
      <div className="left-part bg-[#4c7d81] py-5 text-neutral-50">
        {/* <img className='rounded-full px-2 py-2' src={coverLetterData.personalInformation.img} alt="Profile" /> */}

        <Image
        className='rounded-full px-2 py-2'
      src={coverLetterData.personalInformation.img} 
      width={350}
      height={300}
      alt="Picture of the author"
    />

        <div className='mx-4 text-lg '>
        <h2 className='text-xl text-main border-b-2 font-bold'>Contact:</h2>
        <div className='flex items-center gap-2 mt-3'>
            <FaPhoneVolume className='text-sub_color'></FaPhoneVolume>
        <p>Phone: {coverLetterData.personalInformation.phone}</p>
        </div>
        <div className='flex items-center gap-2'>
            <MdEmail className='text-[#fcef4c]'></MdEmail>
        <p>Email: {coverLetterData.personalInformation.email}</p>
        </div>
       <div className='flex items-center gap-2'>
        <FaLocationDot className='text-[#0102d8]'></FaLocationDot>
       <p>Address: {coverLetterData.personalInformation.address}</p>
       </div>
        <div>
        <h3 className='text-xl text-main border-b-2 mt-5 font-bold'>Education</h3>
        </div>
        {coverLetterData.education.map((edu, index) => (
          <div key={index}>
            
            <p>School: {edu.school}</p>
            <p>Graduation Year: {edu.graduationYear}</p>
          </div>
        ))}
        </div>
       <div className='mx-4 text-lg'>
       <h3 className='text-xl text-main border-b-2 mt-5 font-bold' >Skills:</h3>
        <ul>
          {coverLetterData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h3 className='text-xl text-main border-b-2 mt-5 font-bold'>Languages:</h3>
        <ul>
          {coverLetterData.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
       </div>
      </div>

      {/* Right Part (2/3) */}
      <div className="right-part bg-neutral-200 px-5 py-10 text-lg text-main">
        {/* <h1>Cover Letter</h1> */}
        <p className='text-3xl font-bold'> {coverLetterData.personalInformation.firstName} {coverLetterData.personalInformation.lastName}</p>
        <p className='text-3xl  text-neutral-950 border-b-4 pb-4'>{coverLetterData.personalInformation.title}</p>
        
        {/* Summary */}
        {/* <h3>Summary</h3> */}
        <p className='text-lg mt-5'>{coverLetterData.summary}</p>


        <h3 className='text-xl font-bold border-b-2 mt-10'>Projects</h3>
        {coverLetterData.projects.map((project, index) => (
          <div key={index}>
            <p className='font-medium'>Name: {project.name}</p>
            <p>Description: {project.description}</p>
            <p className='mb-5'>Technologies: {project.technologies.join(', ')}</p>
          </div>
        ))}

        {/* Experience */}
        <h3 className='text-xl font-bold border-b-2 mt-10'>Experience</h3>
        {coverLetterData.experience.map((exp, index) => (
          <div key={index}>
            <p>Position: {exp.position}</p>
            <p className='font-medium'>Company: {exp.company}</p>
            <p>Location: {exp.location}</p>
            <p>Start Date: {exp.startDate}</p>
            <p>End Date: {exp.endDate}</p>
            <ul className='mb-10'>
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Certifications */}
        <h3 className='text-xl font-bold border-b-2'>Certifications</h3>
        {coverLetterData.certifications.map((certification, index) => (
          <div key={index}>
            <p>Name: {certification.name}</p>
            <p>Organization: {certification.organization}</p>
            <p>Date: {certification.date}</p>
          </div>
        ))}

        {/* Projects */}
       
      </div>
    </div>
  );
};

export default Resumes;
