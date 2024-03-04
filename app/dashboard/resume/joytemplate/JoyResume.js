import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import { GiPostOffice } from "react-icons/gi";
import { IoEarth } from "react-icons/io5";
import Image from "next/image";
const JoyResume = ({ resume }) => {
  const { basicInfo, educations, employments, languages, skills, projects } = resume;
  console.log(resume);
  return (
    <div className="max-w-screen-lg mx-auto border-2 p-5 my-4 font-poppins">
      <div className="w-full">
        <div className="flex  items-end gap-2">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {basicInfo?.fname} {basicInfo?.lname}
          </h1>
          <h2 className="font-lobster text-lg md:text-xl">
            {basicInfo?.designation}
          </h2>
        </div>
        {/* details */}
        <div className="flex">
          <div className="grid grid-cols-2 w-4/5">
            <h2 className="flex items-center gap-2">
              <MdEmail />
              {basicInfo?.email}
            </h2>
            <h2 className="flex items-center gap-2">
              <MdOutlinePermContactCalendar />
              {basicInfo?.dob}
            </h2>
            <h2 className="flex items-center gap-2 ">
              <span>
                <IoEarth />
              </span>
              {basicInfo?.city}, {basicInfo?.country}
            </h2>
            <h2 className="flex items-center gap-2">
              <FaPhone />
              {basicInfo?.phone}
            </h2>
            <h2 className="flex items-center gap-2">
              <span>
                <FaLocationDot />
              </span>
              {basicInfo?.street},
            </h2>

            <h2 className="flex items-center gap-2">
              <IoIosPeople />
              {basicInfo?.nationality}
            </h2>
            <h2 className="flex items-center gap-2 ">
              <span>
                <GiPostOffice />
              </span>
              {basicInfo?.postal}
            </h2>
          </div>
          <div className="">
           {basicInfo?.photoURL && <Image
              src={basicInfo?.photoURL}
              alt="User Image"
              className="rounded-full m-5"
              width={100}
              height={100}
            />}
          </div>
        </div>
      </div>

      {/* profile */}

      <div className="pt-5">
        <h1 className="text-xl font-semibold">About</h1>
        <hr className="border border-black"></hr>
        <p className="pt-2">{basicInfo?.about}</p>
      </div>
      {/* employment */}
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Professional Experience</h1>
        <hr className="border border-black"></hr>
        {employments && Object.values(employments)?.map((emp, index) => (
          <div key={index} className="pt-2 grid grid-cols-12 gap-2">
            <div className="col-span-3">
            <h2>
                  {new Date(emp?.startDate)?.toLocaleDateString()} -
                  {emp?.ongoing
                    ? "Present"
                    : new Date(emp?.endDate)?.toLocaleDateString()}
                </h2>
              
            </div>
            <div className="col-span-9">
              <h2 className="text-xl font-medium">{emp?.employer}</h2>
              <h3 className="font-lobster">{emp?.jobTitle}</h3>
              <ul className="list-disc pl-3">
                <li>{emp?.jobDescription}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Education */}

      <div className="pt-5 ">
        <h1 className="text-xl font-semibold">Education</h1>
        <hr className="border border-black"></hr>
        <div className="grid grid-cols-2 pt-4 gap-3">
          {educations && Object.values(educations)?.map((edu, index) => (
            <div key={index} className="flex md:gap-5 gap-3">
              <div>
                <h2>
                  {new Date(edu?.startDate)?.toLocaleDateString()} -
                  {edu?.ongoing
                    ? "Present"
                    : new Date(edu?.endDate)?.toLocaleDateString()}
                </h2>
                {/* <h3>{edu.location}</h3> */}
              </div>
              <div>
                <h3 className="font-semibold">{edu?.degree}</h3>
                <h2>{edu?.institute}</h2>
                <ul className="list-disc  pl-3">
                  <li>{edu?.jobDescription}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* projects */}
      <div className="pt-5">
        <h1 className="text-2xl font-semibold">Project</h1>
        <hr className="border border-black"></hr>
        {educations && Object.values(projects)?.map((project, index) => (
          <div key={index} className="text-xl pt-3">
            <h2 className="font-semibold">
              {project?.title}
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
      {/* SKILLs */}
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Skills</h1>
        <hr className="border border-black"></hr>
        <div className="grid grid-cols-3  gap-4">
          <ul className="list-disc flex pt-3 pl-4 md:gap-12 gap-4">
            {skills && Object.values(skills)?.map((lang, index) => (
              <li key={index}>
                <span className="text-lg font-semibold">{lang?.level}</span>:{" "}
                {lang?.skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Languages */}
      <div className="pt-5">
        <h1 className="text-xl font-semibold">Languages</h1>
        <hr className="border border-black"></hr>
        <div>
          <ul className="list-disc flex pt-3 pl-4 md:gap-12 gap-4">
            {languages && Object.values(languages)?.map((lang, index) => (
              <li key={index}>
                {lang?.language} ({lang?.proficiency})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JoyResume;
