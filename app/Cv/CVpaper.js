import coverLetterData from '/assets/cover.json'
import './CVpaper.css'

const CVpaper = () => {
    return (
        <div className="cv-container w-11/12 md:w-10/12 lg:w-9/12">
      

      <section className="personal-info">
        {/* <h2>Personal Information</h2> */}
        <div className='md:flex justify-between'>
            <div className='text-xl text-main mt-10'>
                
        <p className='text-3xl font-bold'>{coverLetterData.personalInformation.firstName} {coverLetterData.personalInformation.lastName}</p>
        <p className='mb-5'>{coverLetterData.personalInformation.title}</p>
        <p>Email: {coverLetterData.personalInformation.email}</p>
        <p>Phone: {coverLetterData.personalInformation.phone}</p>
        <p>Address: {coverLetterData.personalInformation.address}</p>
        
            </div>

            <img className='w-[350px] h-[300px]' src={coverLetterData.personalInformation.img} alt='Profile' />
        </div>
      </section>

      <section className="summary">
        {/* <h2>Summary</h2> */}
        <p>{coverLetterData.summary}</p>
      </section>

      <section className="education ">
        <h2 className='mb-5'>Education</h2>
        {coverLetterData.education.map((edu, index) => (
          <div className='' key={index}>
            <p>Degree: {edu.degree}</p>
            <p>School: {edu.school}</p>
            <p>Graduation Year: {edu.graduationYear}</p>
          </div>
        ))}
      </section>

      <section className="experience">
        <h2 className='mb-5'>Experience</h2>
        {coverLetterData.experience.map((exp, index) => (
          <div key={index}>
            <p>Position: {exp.position}</p>
            <p>Company: {exp.company}</p>
            <p>Location: {exp.location}</p>
            <p>Start Date: {exp.startDate}</p>
            <p>End Date: {exp.endDate}</p>
            {/* <ul>
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </section>

      {/* Add sections for Skills, Languages, Certifications, and Projects */}
       {/* Skills */}

       <section className="skills">
       <h2 className='mb-5'>Skills</h2>
      <div className='lg:flex gap-20'>


      <ul>
        {coverLetterData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div>

      <h3 className='text-main underline mb-1'>Languages:</h3>
      <ul>
        {coverLetterData.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      </div>
      </div>


      </section>

      {/* Languages */}

      

      {/* Certifications */}
      <section className="skills">
      <h2>Certifications</h2>
      {coverLetterData.certifications.map((certification, index) => (
        <div key={index}>
          <p>Name: {certification.name}</p>
          <p>Organization: {certification.organization}</p>
          <p>Date: {certification.date}</p>
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