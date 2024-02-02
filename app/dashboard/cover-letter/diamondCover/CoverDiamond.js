import diamondCover from '/assets/diamondCover.json'

const CoverDiamond = ({cover}) => {
    const {
        designation,
        fname,
        lname,
        email,
        phone,
        letterBody
      } = cover;
    
      return (
        <div className="max-w-6xl mx-auto py-16 px-10 bg-gray-100 rounded shadow-md bg-neutral-50">
          <h1 className="text-3xl font-bold text-main mb-2">{`${fname} ${lname}`}</h1>
          <p className="text-xl mb-4 font-bold">{designation}</p>
          <p className=" text-lg underline">Email: {email}</p>
          <p className='text-lg'>Phone: {phone}</p>
    
          <div className="letter-body whitespace-pre-line mt-6" dangerouslySetInnerHTML={{ __html: letterBody }} />
    
          <p className="mt-6 text-xl text-main">Sincerely,<br/>{fname} {lname}</p>
        </div>
      );
    };
    

export default CoverDiamond;