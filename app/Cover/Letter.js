import coverLetterData from '/assets/cover.json'

const Letter = () => {
    return (
        <div className='w-11/12 lg:w-9/12 mx-auto bg-[#D4D4D4] px-10 py-24 lg:px-20 lg:py-20'>
          {/* <h1>Cover Letter</h1> */}
          
          {/* Personal Information */}
          <p className='text-5xl font-bold text-main'>{coverLetterData.personalInformation.firstName} {coverLetterData.personalInformation.lastName}</p>
          <p className='text-3xl  text-neutral-950 border-b-4 pb-4'>{coverLetterData.personalInformation.title}</p>
         <div className=' mt-6 mb-16 text-xl font-medium text-main'>
         <p>Email: {coverLetterData.personalInformation.email}</p>
          <p>Phone: {coverLetterData.personalInformation.phone}</p>
          <p>Address: {coverLetterData.personalInformation.address}</p>
         </div>
    
          {/* Summary */}
          {/* <h3>Summary</h3> */}
          <h2 className='text-xl text-neutral-950 mt-8 mb-4'>Dear Hiring Manager,</h2>
          <p className='my-5 font-medium'>I hope this letter finds you well. My name is {coverLetterData.personalInformation.firstName} {coverLetterData.personalInformation.lastName}. </p>
          <p className='my-5 font-medium'>I am very interested in this opportunity, and I am certain I have the necessary expertise to take Streich to the top of the industry.</p>
          <p><p className='my-5 font-medium'>{coverLetterData.expertise}</p></p>
          <p className='my-5 font-medium'>{coverLetterData.summary}</p>
    
          {/* Education */}
          {/* <h3 className='text-xl font-medium text-main '>My Education:</h3> */}
          {/* {coverLetterData.education.map((edu, index) => (
            <div className='lg:flex lg:gap-10' key={index}>
              <p>Degree: {edu.degree}</p>
              <p>School: {edu.school}</p>
              <p>Graduation Year: {edu.graduationYear}</p>
            </div>
          ))} */}
    
          {/* Experience */}
          {/* <h3>Experience</h3> */}
          {/* {coverLetterData.experience.map((exp, index) => (
            <div key={index}>
              <p>Position: {exp.position}</p>
              <p>Company: {exp.company}</p>
              <p>Location: {exp.location}</p>
              <p>Start Date: {exp.startDate}</p>
              <p>End Date: {exp.endDate}</p>
              <ul>
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))} */}
    
          {/* Skills */}
          {/* <h3 className='text-xl font-medium text-main mt-3 underline'>Skills</h3> */}
          {/* <ul>
            {coverLetterData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul> */}
    
          {/* Languages */}
          {/* <h3>Languages</h3> */}
          {/* <ul>
            {coverLetterData.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul> */}
    
          {/* Certifications */}
          {/* <h3>Certifications</h3> */}
          {/* {coverLetterData.certifications.map((certification, index) => (
            <div key={index}>
              <p>Name: {certification.name}</p>
              <p>Organization: {certification.organization}</p>
              <p>Date: {certification.date}</p>
            </div>
          ))} */}
    
          {/* Projects */}
          {/* <h3>Projects</h3> */}
          {/* {coverLetterData.projects.map((project, index) => (
            <div key={index}>
              <p>Name: {project.name}</p>
              <p>Description: {project.description}</p>
              <p>Technologies: {project.technologies.join(', ')}</p>
            </div>
          ))} */}

          <p className='my-8 font-medium'>I would be happy to provide greater detail about my skills and experience during an interview. Please call me at your earliest convenience.</p>

          <h1 className=' font-bold text-main'>Sincerely,</h1>
          <h1 className='text-xl  font-bold text-neutral-950'>{coverLetterData.personalInformation.firstName} {coverLetterData.personalInformation.lastName}</h1>
        </div>
      );
    };
    

export default Letter;