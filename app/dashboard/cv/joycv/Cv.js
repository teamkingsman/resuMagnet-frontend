import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { GiPostOffice } from "react-icons/gi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
// import cvData from "/assets/cv.json";

const Cv = ({cvData}) => {
  const { basicInfo, education, employment, languages, skills, projects } =cvData;
    console.log(cvData);
  return (
    <div className="max-w-screen-lg mx-auto border-2 font-poppins rounded-xl m-10">
      <div className=" grid grid-cols-12 rounded-xl ">
        {/* left side */}
        <div className="col-span-4 bg-[#042704] rounded-l-xl">
          <div className=" flex items-center justify-center ">
            {basicInfo?.photoURL &&
              <Image
              src={basicInfo?.photoURL}
              alt="User Image"
              className="rounded-full m-5"
              width={100}
              height={100}
            />
            }
          </div>
          {/* Contact */}
          <div className="text-whitecolor m-5">
            <h1 className="text-2xl font-semibold">CONTACT</h1>
            <hr className="border "></hr>
            <div className=" space-y-2 pt-3 text-xl">
              <h3 className="flex items-center gap-2">
                <MdLocalPhone />
                {basicInfo?.phone}
              </h3>
              <h3 className="flex items-center gap-2">
                <HiOutlineMail />
                {basicInfo?.email}
              </h3>
              <div>
                <h3 className="flex items-center gap-2">
                  <MdLocationOn />
                  {basicInfo?.street}
                  {/* 22, gollamari more */}
                </h3>
                <h2 className="pl-5">
                  {basicInfo?.city}, {basicInfo?.country}
                  {/* Khulna, Bangladesh */}
                </h2>
              </div>
              <h3 className="flex items-center gap-2">
                <GiPostOffice />
                PostCode: {basicInfo?.postal}
              </h3>
              <h3 className="flex items-center gap-2">
                <MdOutlinePermContactCalendar />
                DB: {basicInfo?.dob}
              </h3>
              <h3 className="flex items-center gap-2">
                <IoEarth />
                {basicInfo?.nationality}
                {/* Bangladeshi */}
              </h3>
            </div>
            {/* Languages */}
            <div className="pt-4">
              <h1 className="text-2xl font-semibold">Languages</h1>
              <hr className="border"></hr>
              <div className="space-y-2 pt-3 text-xl">
                <ul className="list-disc pl-4">
                  {languages?.map((lang, index) => (
                    <li key={index}>
                      <span className="font-semibold">{lang?.language} :</span>{" "}
                      <span>{lang?.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* skills */}
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
          </div>
        </div>
        {/* Right side */}
        <div className="col-span-8 p-8 ">
          <div className=" text-center ">
            <h2 className=" text-2xl md:text-4xl font-bold">
              {" "}
              {basicInfo?.fname} {basicInfo?.lname}
            </h2>
            <p className="text-2xl font-semibold">{basicInfo?.designation}</p>
          </div>
          <div className="pt-4">
            <h1 className="text-2xl font-semibold">ABOUT ME</h1>
            <hr className="border"></hr>
            <p className="pt-2 text-xl">{basicInfo?.about}</p>
          </div>
          {/* Experience */}
          <div className="pt-5">
            <h1 className="text-2xl font-semibold">Experience</h1>
            <hr className="border"></hr>

            {employment?.map((job, index) => (
              <div key={index} className="text-xl pt-3">
                <h2 className="text-xl font-semibold">{job?.jobTitle}</h2>
                <h2>{job?.employer}</h2>
                <h2>
                  {job?.startDate} -- {job?.endDate}
                </h2>
                <ul className="list-disc pl-4">
                  <li>{job?.jobDescription}</li>
                </ul>
              </div>
            ))}
          </div>

          {/* education */}
          <div className="pt-5">
            <h1 className="text-2xl font-semibold">Education</h1>
            <hr className="border"></hr>
            {education?.map((edu, index) => (
              <div key={index} className="text-xl pt-3">
                <h2 className="font-semibold">{edu?.degree}</h2>
                <h3>{edu?.institute}</h3>
                <h3>
                  {edu?.startDate} -- <span>{edu?.endDate}</span>
                </h3>
                <ul className="list-disc pl-4">
                  <li>{edu?.jobDescription}</li>
                </ul>
              </div>
            ))}
            
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
        </div>
      </div>
    </div>
  );
};

export default Cv;
