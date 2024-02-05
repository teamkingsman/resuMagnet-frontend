

const ClassicCoverLetter = ({coverLetter}) => {
    // console.log(coverLetter);
    const { designation, email, fname, lname, letterBody, phone } = coverLetter;
    return (
        <>
             <div className="shadow-2xl  bg-slate-200 font-serif w-[400px]  lg:w-[800px] h-[1200px] mx-auto mt-4">
            
         
                  <div>
                      <div className="">
                 <h2 className="text-center text-2xl font-bold mt-4">{fname}{lname}</h2>
              </div>
                   {/* horizontal */}
                   <div className="space-y-4 w-[300px] lg:w-[750px] mx-auto bg-cyan-600">
                <hr className="mt-4 h-2  "/>
                </div>
                <div className="flex text-sm lg:text-lg justify-center mt-2 gap-2 lg:gap-4">
                 
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>

                <div className="mt-8 ml-8 mr-4 text-sm lg:text-xl">
                 
                    <h2 className="">{designation}</h2>
                    <p>{phone}</p>
                    <p>{email}</p>
                   
                     <div className=" justify-center">
                        <p className='display-linebreak'>{letterBody}</p>
                         
                     
                     </div>
                </div>

                    </div>
               
            
             </div>
        </>
    );
};

export default ClassicCoverLetter;