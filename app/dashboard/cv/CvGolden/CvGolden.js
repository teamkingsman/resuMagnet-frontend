
import Image from 'next/image';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const CvGolden = ({ cv }) => {
    const { basicInfo, education, employment, skills, languages, projects } = cv;

    return (
        <div className='bg-gray-100 py-10'>
            <div className="cv-container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="basic-info text-center mb-8">
                    {basicInfo?.photoURL && (
                        <Image
                            src={basicInfo?.photoURL}
                            alt="Profile"
                            className="rounded-full w-32 h-32 mx-auto mb-4"
                            width={128}
                            height={128}
                        />
                    )}
                    <h1 className="text-3xl font-bold text-gray-800">{`${basicInfo?.fname} ${basicInfo?.lname}`}</h1>
                    <p className='text-lg text-gray-600'>{basicInfo?.designation}</p>
                    <div className='flex justify-center items-center mt-3 space-x-4'>
                        <div className='flex items-center'>
                            <IoMailSharp className='text-lg text-gray-600'></IoMailSharp>
                            <p className='text-gray-600'>{basicInfo?.email}</p>
                        </div>
                        <div className='flex items-center'>
                            <FaPhoneVolume className='text-lg text-gray-600'></FaPhoneVolume>
                            <p className='text-gray-600'>{basicInfo?.phone}</p>
                        </div>
                    </div>
                </div>

                <div className="education mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
                    {education?.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold">{edu.degree} - {edu.institute}</p>
                            <p className="text-gray-600">{`${edu.startDate} - ${edu.endDate}`}</p>
                            <p className="text-gray-600">{edu.jobDescription}</p>
                        </div>
                    ))}
                </div>

                <div className="employment mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Employment</h2>
                    {employment?.map((job, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold">{job.jobTitle} - {job.employer}</p>
                            <p className="text-gray-600">{`${job.startDate} - ${job.endDate}`}</p>
                            <p className="text-gray-600">{job.jobDescription}</p>
                        </div>
                    ))}
                </div>

                <div className="skills mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>
                    {skills?.map((skill, index) => (
                        <div key={index} className="mb-2">
                            <p className="font-semibold">{skill.skill}</p>
                            <p className="text-gray-600">{skill.level}</p>
                        </div>
                    ))}
                </div>

                <div className="languages mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Languages</h2>
                    {languages?.map((lang, index) => (
                        <div key={index} className="mb-2">
                            <p className="font-semibold">{lang.language}</p>
                            <p className="text-gray-600">{lang.proficiency}</p>
                        </div>
                    ))}
                </div>

                <div className="projects mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Projects</h2>
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

export default CvGolden;
