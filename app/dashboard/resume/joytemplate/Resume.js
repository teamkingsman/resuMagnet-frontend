import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import resumeData from "/assets/resume.json";

const Resume = () => {
  // const {
  //   professionalExperience,
  //   education,
  //   skills,
  //   languages,
  //   certificates,
  //   personalSkills,
  // } = resumeData;
  const {basicInfo, education, employment, languages, projects, skills} = resumeData
  console.log(resumeData);
  return (
    <div className="max-w-screen-lg mx-auto border-2 p-5 font-poppins">
      <div className="w-full">
        <div className="flex  items-end gap-2">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {basicInfo?.fname}{basicInfo?.lname}
          </h1>
          <h2 className="font-lobster text-lg md:text-xl">
            {basicInfo?.designation}
          </h2>
        </div>

        <div className="grid grid-cols-2">
          <h2 className="flex items-center gap-2">
            <span>
              <FaLocationDot />
            </span>
            {basicInfo?.country},{basicInfo?.city}
          </h2>
          <h2 className="flex items-center gap-2">
            <MdEmail />
            {basicInfo?.email}
          </h2>
          <h2 className="flex items-center gap-2">
            <FaPhone />
            {basicInfo?.phone}
          </h2>
          <h2 className="flex items-center gap-2">
            <FaLinkedinIn />
            {basicInfo?.linkedin}
          </h2>
          <h2 className="flex items-center gap-2">
            <FaGithub />
            {basicInfo?.github}
          </h2>
        </div>
      </div>

      {/* profile */}

      {/* <div className="pt-5">
        <h1 className="text-xl font-semibold">Profile</h1>
        <hr className="border-2 border-black"></hr>
        <p>{basicInfo?.designation}</p>
      </div> */}
      {/* employment*/} 
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Professional Experience</h1>
        <hr className="border-2 border-black"></hr>
        {employment?.map((employment, index) => (
          <div key={index} className="pt-2 grid grid-cols-12 gap-2">
            <div className="col-span-3">
              <h1>
                {employment?.startDate} - {employment?.endDate}
              </h1>
              <h2>{employment?.location}</h2>
            </div>
            <div className="col-span-9">
              <h2 className="text-xl font-medium">{employment?.jobTitle}</h2>
              <h3 className="font-lobster">{employment?.employer}</h3>
              <ul className="list-disc pl-3">
                {employment?.responsibilities.map((jobDescription, idx) => (
                  <li key={idx}>{jobDescription}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Education */}
      <div className="pt-5 ">
        <h1 className="text-xl font-semibold">Education</h1>
        <hr className="border-2 border-black"></hr>
        <div className="grid grid-cols-2 pt-4 gap-3">
          {education?.map((edu, index) => (
            <div key={index} className="flex md:gap-5 gap-3 ">
              <div>
                <h2>
                  {edu?.startDate} - {edu?.endDate}
                </h2>
                <h3>{edu?.location}</h3>
              </div>
              <div>
                <h3 className="font-semibold">{edu?.degree}</h3>
                <h2>{edu?.institution}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SKILLs */}
      <div className="pt-5">
              <h1 className="text-2xl font-semibold">SKILLS</h1>
              <hr className="border"></hr>
              <div className="text-xl pt-3">
                <ul className="list-disc pl-4">
                  {skills?.map((skill, index) => (
                    <li key={index}>
                      <span className="font-semibold">{skill?.level} :</span>
                      <span>{skill?.skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        {/* language */}
      <div className="pt-5">
              <h1 className="text-2xl font-semibold">SKILLS</h1>
              <hr className="border"></hr>
              <div className="text-xl pt-3">
                <ul className="list-disc pl-4">
                  {languages?.map((language, index) => (
                    <li key={index}>
                      <span className="font-semibold">{language?.proficiency} :</span>
                      <span>{language?.language}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
              {/* Project */}
            <div className="pt-5">
            <h1 className="text-2xl font-semibold">Project</h1>
            <hr className="border"></hr>
            {projects?.map((project, index) => (
              <div key={index} className="text-xl pt-3">
                <h2 className="font-semibold">
                  {project?.title}{" "}
                  <span className="text-base font-medium">{project?.type}</span>
                </h2>
                <h3>{project?.liveLink}</h3>
                <h3>{project?.githubLink}</h3>
                <ul className="list-disc pl-4">
                  <li>{project?.description}</li>
                </ul>
              </div>
            ))}
            
            
          </div>
      {/* Certificate */}
      {/* <div className="pt-5">
        <h1 className="text-xl font-semibold">Certificate</h1>
        <hr className="border-2 border-black"></hr>
        <div>
          <ul className="list-disc flex pt-3 pl-4 md:gap-12 gap-4">
            {certificates?.map((certificate, index) => (
              <li key={index}>{certificate}</li>
            ))}
          </ul>
        </div>
      </div> */}

      {/* Person Skills */}
      {/* <div className="pt-5">
        <h1 className="text-xl font-semibold">Personal Skills</h1>
        <hr className="border-2 border-black"></hr>
        <div>
          <ul className="list-disc flex pt-3 pl-4 md:gap-12 gap-4">
            {personalSkills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Resume;
