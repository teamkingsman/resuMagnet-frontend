// import coverLetterData from '/assets/cover.json'

const Letter = ({cover}) => {
  const {
    designation,
    fname,
    lname,
    email,
    phone,
    city,
    letterBody
  } = cover;

    return (
        <div className='w-11/12 lg:w-9/12 mx-auto bg-[#D4D4D4] px-10 py-24 lg:px-20 lg:py-20'>
          {/* <h1>Cover Letter</h1> */}
          
          {/* Personal Information */}
          <p className='text-5xl font-bold text-main'>{`${fname} ${lname}`}</p>
          <p className='text-3xl  text-neutral-950 border-b-4 pb-4'>{designation}</p>
         <div className=' mt-6 mb-16 text-xl font-medium text-main'>
         <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          {/* <p>Address: {city}</p> */}
         </div>
    
          {/* Summary */}
          {/* <h3>Summary</h3> */}
          {/* <h2 className='text-xl text-neutral-950 mt-8 mb-4'>Dear Hiring Manager,</h2>
          <p className='my-5 font-medium text-lg'>I hope this letter finds you well. My name is {coverLetterData.personalInformation.firstName} {coverLetterData.personalInformation.lastName}. </p>
          <p className='my-5 font-medium text-lg'>I am very interested in this opportunity, and I am certain I have the necessary expertise to take Streich to the top of the industry.</p>
          <p><p className='mt-10 mb-7 font-medium text-lg'>{coverLetterData.expertise}</p></p>
          <p className='my-5 font-medium  text-lg'>{coverLetterData.summary}</p> */}
          <div className="letter-body whitespace-pre-line my-6" dangerouslySetInnerHTML={{ __html: letterBody }} />
    
         
          {/* <p className='my-8 font-medium text-lg'>I would be happy to provide greater detail about my skills and experience during an interview. Please call me at your earliest convenience.</p>\ */}

          <h1 className=' font-bold text-main text-xl mt-5'>Sincerely,</h1>
          <h1 className='text-2xl  font-bold text-neutral-950 mt-3'>{fname} {lname}</h1>
        </div>
      );
    };
    

export default Letter;