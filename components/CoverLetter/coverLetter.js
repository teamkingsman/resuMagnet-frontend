
import coverLetter from '/public/coverLetter.json'
const CoverLetter = () => {
    console.log(coverLetter);    
    return (
        <>
             <div className="shadow-2xl bg-slate-200 font-serif w-[400px]  lg:w-[800px] h-[1000px] mx-auto mt-4">
              <div className="">
                 <h2 className="text-center text-2xl font-bold mt-4">{coverLetter.sender?.name}</h2>
              </div>
                   {/* horizontal */}
                   <div className="space-y-4 w-[300px] lg:w-[750px] mx-auto bg-cyan-600">
                <hr className="mt-4 h-2  "/>
                </div>
                <div className="flex text-sm lg:text-lg justify-center mt-2 gap-2 lg:gap-4">
                    <h2>{coverLetter.sender.address}</h2>
                    <p>{coverLetter.sender.phone}</p>
                    <p>{coverLetter.sender.email}</p>
                </div>

                <div className="mt-8 ml-8 mr-4 text-sm lg:text-xl">
                    <h2 className="">{coverLetter.date}</h2>
                    <h2 className="">{coverLetter.salutation}</h2>
                    <h2 className="">{coverLetter.recipient.company}</h2>
                     <p className="mt-4">{coverLetter.recipient?.name}</p>
                     <div className=" justify-center">
                        <p>{coverLetter.body}</p>
                         
                       <p className="mt-4">Thank you for your time and consideration of my candidacy.</p>
                       <div className="mt-4">
                        <p>{coverLetter.closing}</p>
                        <p>Moin Uddin</p>
                       </div>
                     </div>
                </div>
             </div>
        </>
    );
};

export default CoverLetter;
