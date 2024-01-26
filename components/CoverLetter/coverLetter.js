

const CoverLetter = ({item}) => {
    const {coverLetter} = item;
    return (
        <>
              <div className="shadow-2xl bg-slate-200  w-[800px] h-[1000px] mx-auto mt-4">
              <div className="">
                 <h2 className="text-center text-2xl font-bold mt-4">{coverLetter.sender.name}</h2>
              </div>
                   {/* horizontal */}
                   <div className="space-y-4 w-[750px] mx-auto bg-cyan-600">
                <hr className="mt-4 h-2  "/>
                </div>
                <div className="flex justify-center mt-2 gap-4">
                    <h2>{coverLetter.sender.address}</h2>
                    <p>{coverLetter.sender.phone}</p>
                    <p>{coverLetter.sender.email}</p>
                </div>

                <div className="mt-8 ml-8 mr-4">
                    <h2 className="">{coverLetter.date}</h2>
                    <h2 className="">{coverLetter.salutation}</h2>
                    <h2 className="">{coverLetter.recipient.company}</h2>
                     <p className="mt-4">{coverLetter.recipient.name}</p>
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