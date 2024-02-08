// import coverLetterData from '/assets/cover.json'
import './CVpaper.css'

import Image from 'next/image'
const CVpaper = () => {
  const { basicInfo, education, employment, skills, languages, projects } = cv;
    return (
        <div className="cv-container w-11/12 md:w-10/12 lg:w-9/12">
      

      <section className="personal-info">
        {/* <h2>Personal Information</h2> */}
        <div className='md:flex justify-between'>
            <div className='text-xl text-main mt-10'>
                
        <p className='text-3xl font-bold'>{`${basicInfo?.fname} ${basicInfo?.lname}`}</p>
        <p className='mb-5'>{basicInfo?.designation}</p>
        <p>Email: {basicInfo?.email}</p>
        <p>Phone: {basicInfo?.phone}</p>
        <p>Address: {basicInfo?.city}</p>
        
            </div>

            {/* <img className='w-[350px] h-[300px]' src={coverLetterData.personalInformation.img} alt='Profile' /> */}
            {basicInfo?.photoURL &&
            <Image
            src={basicInfo?.photoURL}
            alt="Profile"
            className="rounded-full w-48 h-48 mx-auto mb-4"
            width={300} // Set the width of the image
            height={300} // Set the height of the image
          />
          }

        </div>
      </section>

      <section className="summary">
        
        <p>{basicInfo?.about}</p>
      </section>

      <section className="education ">
        <h2 className='mb-5'>Education</h2>
        {education?.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{edu.degree} - {edu.institute}</p>
              <p>{`${edu.startDate} - ${edu.endDate}`}</p>
              <p>{edu.jobDescription}</p>
            </div>
          ))}
      </section>

      <section className="experience">
        <h2 className='mb-5'>Experience</h2>
        {employment?.map((job, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{job.jobTitle} - {job.employer}</p>
              <p>{`${job.startDate} - ${job.endDate}`}</p>
              <p>{job.jobDescription}</p>
            </div>
          ))}
      </section>

      
       {/* Skills */}

       <section className="skills">
       <h2 className='mb-5'>Skills</h2>
      <div className='lg:flex gap-20'>


      <ul>
      {skills?.map((skill, index) => (
            <div key={index} className="mb-4">
              <p>{skill.skill} - {skill.level}</p>
            </div>
          ))}
      </ul>
      <div>

      <h3 className='text-main underline mb-1'>Languages:</h3>
      <ul>
      {languages?.map((lang, index) => (
            <div key={index} className="mb-4">
              <p>{lang.language} - {lang.proficiency}</p>
            </div>
          ))}
      </ul>
      </div>
      </div>


      </section>

      {/* Languages */}

      

      {/* Certifications */}
      <section className="skills">
      <h2>Projects</h2>
      {projects?.map((projGroup, index) => (
            <div key={index} className="project-group mt-4">
              {Array.isArray(projGroup) &&
                projGroup.map((project, projIndex) => (
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
      </section>

      {/* Projects */}
      {/* <h3>Projects</h3> */}
      {/* {coverLetterData.projects.map((project, index) => (
        <div key={index}>
          <p>Name: {project.name}</p>
          <p>Description: {project.description}</p>
          <p>Technologies: {project.technologies.join(', ')}</p>
        </div>
      ))} */}

    </div>
  );
};


export default CVpaper;