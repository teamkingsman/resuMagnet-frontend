import Image from 'next/image';
// import CvData from '/assets/diamond.json'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const CvDiamond = ({ cv }) => {
  const { basicInfo, education, employment, skills, languages, projects } = cv;
  console.log(cv)

  return (
    <div className='bg-[#AEB6BFs] py-20'>

      <div
        className="cv-container px-5 lg:px-12 py-10 bg-neutral-50 mx-auto max-w-6xl"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        <div className="basic-info text-center text-main pb-5 border-b-4 mt-10">
          {basicInfo?.photoURL &&
            <Image
              src={basicInfo?.photoURL}
              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto mb-4"
              width={300} // Set the width of the image
              height={300} // Set the height of the image
            />
          }
          <h1 className="text-3xl text-sub_color font-bold">{`${basicInfo?.fname} ${basicInfo?.lname}`}</h1>
          <p className='font-bold text-xl'>{basicInfo?.designation}</p>
          <div className='lg:flex gap-20 justify-center items-center mt-3'>
            <div className='flex gap-2 justify-center'>
              <IoMailSharp className='text-lg text-[#FFDA33]'></IoMailSharp>

              <p>{basicInfo?.email}</p>
            </div>
            <div className='flex gap-2 justify-center items-center'>
              <FaPhoneVolume className='text-lg text-[#3390FF]'></FaPhoneVolume>
              <p>{basicInfo?.phone}</p>
            </div>
          </div>
        </div>

        <div className="education mt-6">
          <h2 className="text-xl font-bold  text-main bg-sub_color pl-2 mb-4 py-2">Education</h2>
          {education?.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{edu.degree} - {edu.institute}</p>
              <p>{`${edu.startDate} - ${edu.endDate}`}</p>
              <p>{edu.jobDescription}</p>
            </div>
          ))}
        </div>

        <div className="employment mt-6">
          <h2 className="text-xl font-bold  text-main bg-sub_color pl-2 mb-4 py-2">Employment</h2>
          {employment?.map((job, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{job.jobTitle} - {job.employer}</p>
              <p>{`${job.startDate} - ${job.endDate}`}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>

        <div className="skills mt-6">
          <h2 className="text-xl font-bold  text-main bg-sub_color pl-2 mb-4 py-2">Skills</h2>
          {skills?.map((skill, index) => (
            <div key={index} className="mb-4">
              <p>{skill.skill} - {skill.level}</p>
            </div>
          ))}
        </div>

        <div className="languages mt-6">
          <h2 className="text-xl font-bold  text-main bg-sub_color pl-2 mb-4 py-2">Languages</h2>
          {languages?.map((lang, index) => (
            <div key={index} className="mb-4">
              <p>{lang.language} - {lang.proficiency}</p>
            </div>
          ))}
        </div>

        <div className="projects mt-6">
          <h2 className="text-xl font-bold text-main bg-sub_color pl-2 mb-4 py-2">Projects</h2>
          {projects?.map((project, index) => (
            <div key={index} className="text-xl pt-3">
              <h2 className="font-semibold bg-transparent">{project?.title}</h2>
              <h3>{project?.type}</h3>
              <h3>{project?.liveLink}</h3>
              <h3>{project?.githubLink}</h3>
              <ul className="list-disc pl-4">
                <li>{project?.description}</li>
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default CvDiamond;