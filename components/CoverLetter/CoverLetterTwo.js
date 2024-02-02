import coverLetter from '../../assets/coverLetter.json';
const CoverLetterTwo = () => {
    console.log(coverLetter)
    const { designation, email, fname, lname, letterBody, phone } = coverLetter;
    return (
        <>
           <div className="shadow-2xl bg-slate-200 font-serif w-[400px]  lg:w-[800px] h-[1000px] mx-auto mt-4">
           
                    <div className=" mt-8 p-8">

                    <div className="">
                    <h1 className=" text-xl font-bold  ">{designation}</h1>
                     <h1 className=" text-md ">{fname}{lname}</h1>
                     <h1 className=" text-md ">{phone}</h1>
                     <h1 className=" text-md ">{email}</h1>
      
                    </div>
                     
                      {/* body */}
                      <div>
                        <p className='flex justify-center display-linebreak'>{letterBody}</p>
                     
                      </div>
      
                    
                   </div>
           

            </div>
        </>
    );
};

export default CoverLetterTwo;