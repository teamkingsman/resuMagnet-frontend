import diamondCover from '/assets/diamondCover.json'

const CoverDiamond = () => {
    const {
        designation,
        fname,
        lname,
        email,
        phone,
        letterBody
      } = diamondCover;
    
      return (
        <div className="max-w-2xl mx-auto p-8 bg-gray-100 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-2">{`${fname} ${lname}`}</h1>
          <p className="text-lg">{designation}</p>
          <p className="mb-4">Email: {email}</p>
          <p>Phone: {phone}</p>
    
          <div className="letter-body whitespace-pre-line mt-6" dangerouslySetInnerHTML={{ __html: letterBody }} />
    
          <p className="mt-6">Sincerely,<br/>{fname} {lname}</p>
        </div>
      );
    };
    

export default CoverDiamond;