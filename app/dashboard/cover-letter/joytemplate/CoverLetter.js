// import coverLetter from "/assets/coverLetter.json";

const CoverLetter = ({coverLetter}) => {
  const { designation, email, fname, lname, letterBody, phone } = coverLetter;
// console.log(coverLetter);
  
  return (
    <div className="max-w-screen-lg mx-auto border-2 p-10 font-poppins ">
      <div className="text-center text-lg">
        <h2 className="text-2xl font-semibold">
          <span>{fname} </span>
          {lname}
        </h2>
        <hr className="border-2 border-black" />
        {/* <h3 className="pt-4">{personalInfo.address}</h3> */}
        <div className="flex gap-3 justify-center">
          <h3>Cell: {phone}</h3>
        </div>
        <h2>{email}</h2>
        <h2>{designation}</h2>
      </div>

      <div className="pt-5 text-lg">
        {/* <p>{formattedLetterBody}</p> */}
        <p className='display-linebreak'>{letterBody}</p>
        <br />
        
      </div>
    </div>
  );
};

export default CoverLetter;
