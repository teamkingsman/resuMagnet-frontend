import coverLetter from '../../assets/coverLetter.json';
const CoverLetterTwo = () => {
    console.log(coverLetter)
   
    return (
        <>
           <div className="shadow-2xl bg-slate-200 font-serif w-[400px]  lg:w-[800px] h-[1000px] mx-auto mt-4">
            {
                coverLetter.map((item,index)=>(
                    <div key={index} className=" mt-8 p-8">

                    <div className="">
                    <h1 className=" text-xl font-bold  ">{item.designation}</h1>
                     <h1 className=" text-md ">{item.fname}{item.lname}</h1>
                     <h1 className=" text-md ">{item.phone}</h1>
                     <h1 className=" text-md ">{item.email}</h1>
      
                    </div>
                     
                      {/* body */}
                      <div>
                        <p className='flex justify-center display-linebreak'>{item.letterBody}</p>
                     
                      </div>
      
                    
                   </div>
                ))
            }

            </div>
        </>
    );
};

export default CoverLetterTwo;