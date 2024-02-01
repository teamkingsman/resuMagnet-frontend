import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import resumeData from "/assets/resume.json";

const Resume = () => {
  const {
    professionalExperience,
    education,
    skills,
    languages,
    certificates,
    personalSkills,
  } = resumeData;
  return (
    <div className="max-w-screen-lg mx-auto border-2 p-5 font-poppins">
      <div className="w-full">
        <div className="flex  items-end gap-2">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {resumeData.personalData.name}
          </h1>
          <h2 className="font-lobster text-lg md:text-xl">
            {resumeData.personalData.title}
          </h2>
        </div>

        <div className="grid grid-cols-2">
          <h2 className="flex items-center gap-2">
            <span>
              <FaLocationDot />
            </span>
            {resumeData.PersonalInfo.location}
          </h2>
          <h2 className="flex items-center gap-2">
            <MdEmail />
            {resumeData.PersonalInfo.email}
          </h2>
          <h2 className="flex items-center gap-2">
            <FaPhone />
            {resumeData.PersonalInfo.phone}
          </h2>
          <h2 className="flex items-center gap-2">
            <FaLinkedinIn />
            {resumeData.PersonalInfo.linkedin}
          </h2>
          <h2 className="flex items-center gap-2">
            <FaGithub />
            {resumeData.PersonalInfo.github}
          </h2>
        </div>
      </div>

      {/* profile */}

      <div className="pt-5">
        <h1 className="text-xl font-semibold">Profile</h1>
        <hr className="border-2 border-black"></hr>
        <p>{resumeData.profile}</p>
      </div>
      {/* Professional Experience */}
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Professional Experience</h1>
        <hr className="border-2 border-black"></hr>
        {professionalExperience.map((experience, index) => (
          <div key={index} className="pt-2 grid grid-cols-12 gap-2">
            <div className="col-span-3">
              <h1>
                {experience.startDate} - {experience.endDate}
              </h1>
              <h2>{experience.location}</h2>
            </div>
            <div className="col-span-9">
              <h2 className="text-xl font-medium">{experience.company}</h2>
              <h3 className="font-lobster">{experience.position}</h3>
              <ul className="list-disc pl-3">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
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
          {education.map((edu, index) => (
            <div key={index} className="flex md:gap-5 gap-3 ">
              <div>
                <h2>
                  {edu.startDate} - {edu.endDate}
                </h2>
                <h3>{edu.location}</h3>
              </div>
              <div>
                <h3 className="font-semibold">{edu.degree}</h3>
                <h2>{edu.institution}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SKILLs */}
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Skills</h1>
        <hr className="border-2 border-black"></hr>
        <div className="grid grid-cols-3 pt-3 gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h2 className="font-semibold">{category}:</h2>
              <h3>{skillList.join(" | ")}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Languages */}
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Languages</h1>
        <hr className="border-2 border-black"></hr>
        <div>
          <ul className="list-disc flex pt-3 pl-4 md:gap-12 gap-4">
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Certificate */}
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Certificate</h1>
        <hr className="border-2 border-black"></hr>
        <div>
          <ul className="list-disc flex pt-3 pl-4 md:gap-12 gap-4">
            {certificates.map((certificate, index) => (
              <li key={index}>{certificate}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Person Skills */}
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Personal Skills</h1>
        <hr className="border-2 border-black"></hr>
        <div>
          <ul className="list-disc flex pt-3 pl-4 md:gap-12 gap-4">
            {personalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
