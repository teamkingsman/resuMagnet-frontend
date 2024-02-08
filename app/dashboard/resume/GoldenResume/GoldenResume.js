
import Image from 'next/image';

const GoldenResume = ({ resume }) => {
    const {
        basicInfo,
        education,
        employment,
        skills,
        languages,
        projects
    } = resume;

    return (
        <div className="max-w-6xl mx-auto mt-8 bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-1">
                    <div className="text-center mb-8">
                        {basicInfo?.photoURL && (
                            <Image
                                src={basicInfo?.photoURL}
                                alt="Profile"
                                className="rounded-full mx-auto"
                                width={150}
                                height={150}
                            />
                        )}
                        <h1 className="text-3xl font-bold text-main mt-4">{`${basicInfo?.fname} ${basicInfo?.lname}`}</h1>
                        <p className="text-xl font-semibold text-gray-600">{basicInfo?.designation}</p>
                        <div className="mt-4">
                            <p className="text-lg font-medium text-gray-700">Email: {basicInfo?.email}</p>
                            <p className="text-lg font-medium text-gray-700">Phone: {basicInfo?.phone}</p>
                            <p className="text-lg font-medium text-gray-700">Address: {basicInfo?.street}, {basicInfo?.city}, {basicInfo?.country}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-main mb-4">Skills</h2>
                        {skills?.map((skill, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-lg font-medium">{skill.skill} - {skill.level}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <h2 className="text-2xl font-bold text-main mb-4">Languages</h2>
                        {languages?.map((lang, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-lg font-medium">{lang.language} - {lang.proficiency}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-main mb-4">Education</h2>
                        {education?.map((edu, index) => (
                            <div key={index} className="mb-4">
                                <p className="text-lg font-medium">{edu.degree} - {edu.institute}</p>
                                <p className="text-gray-700">{`${edu.startDate} - ${edu.endDate}`}</p>
                                <p className="text-gray-700">{edu.jobDescription}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-main mb-4">Projects</h2>
                    
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

                    <div>
                        <h2 className="text-2xl font-bold text-main mb-4">Employment</h2>
                        {employment?.map((job, index) => (
                            <div key={index} className="mb-8">
                                <p className="text-lg font-medium">{job.jobTitle} - {job.employer}</p>
                                <p className="text-gray-700">{`${job.startDate} - ${job.endDate}`}</p>
                                <p className="text-gray-700">{job.jobDescription}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoldenResume;
