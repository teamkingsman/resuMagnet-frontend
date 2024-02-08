

const GoldenCover = ({ cover }) => {
    const {
      designation,
      fname,
      lname,
      email,
      phone,
      letterBody
    } = cover;
  
    return (
      <div className="max-w-5xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md mt-24">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{`${fname} ${lname}`}</h1>
          <p className="text-xl font-semibold text-gray-600">{designation}</p>
          <p className="text-lg font-medium text-gray-600">{email}</p>
          <p className="text-lg font-medium text-gray-600">{phone}</p>
        </div>
        
        <div className="text-gray-800 mb-6">
          <p className="whitespace-pre-line">{letterBody}</p>
        </div>
  
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-800 mt-6">Sincerely,</p>
          <p className="text-lg font-semibold text-gray-800">{fname} {lname}</p>
        </div>
      </div>
    );
  };
  
  export default GoldenCover;
  