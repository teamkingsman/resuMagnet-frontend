import Image from 'next/image';
import CvData from '/assets/diamond.json'

const CvDiamond = () => {
    const { basicInfo, education, employment, skills, languages, projects } = CvData;

    return (
      <div
        className="cv-container p-8 bg-gray-100 mx-auto max-w-2xl"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        <div className="basic-info text-center">
        <Image
          src={basicInfo.photoURL}
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto mb-4"
          width={96} // Set the width of the image
          height={96} // Set the height of the image
        />
          <h1 className="text-2xl font-bold">{`${basicInfo.fname} ${basicInfo.lname}`}</h1>
          <p>{basicInfo.designation}</p>
          <p>{basicInfo.email}</p>
          <p>{basicInfo.phone}</p>
        </div>
  
        <div className="education mt-6">
          <h2 className="text-xl font-bold">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{edu.degree} - {edu.institute}</p>
              <p>{`${edu.startDate} - ${edu.endDate}`}</p>
              <p>{edu.jobDescription}</p>
            </div>
          ))}
        </div>
  
        <div className="employment mt-6">
          <h2 className="text-xl font-bold">Employment</h2>
          {employment.map((job, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{job.jobTitle} - {job.employer}</p>
              <p>{`${job.startDate} - ${job.endDate}`}</p>
              <p>{job.jobDescription}</p>
            </div>
          ))}
        </div>
  
        <div className="skills mt-6">
          <h2 className="text-xl font-bold">Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <p>{skill.skill} - {skill.level}</p>
            </div>
          ))}
        </div>
  
        <div className="languages mt-6">
          <h2 className="text-xl font-bold">Languages</h2>
          {languages.map((lang, index) => (
            <div key={index} className="mb-4">
              <p>{lang.language} - {lang.proficiency}</p>
            </div>
          ))}
        </div>
  
        <div className="projects mt-6">
          <h2 className="text-xl font-bold">Projects</h2>
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
    );
  };
  
  export default CvDiamond;