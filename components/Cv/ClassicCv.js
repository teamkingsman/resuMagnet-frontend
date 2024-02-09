
import Image from "next/image";
// import CvData from '../../assets/resume.json'

const ClassicCv = ({ cv }) => {
  // console.log(Cv);
  const { basicInfo, education, employment, skill, language } = cv;
  console.log(basicInfo)
  return (
    <>
      <div className=" mt-8  font-serif   lg:w-[800px] h-[700px] mx-auto shadow-2xl ">

        <div className="flex">
          {/* left */}
          <div className="w-1/4 text-sm lg:text-lg mx-auto  lg:h-[600px] bg-slate-300  shadow-slate-400">
            <div className=" ml-4">


              <div>
                <div className="mt-4">

                  {basicInfo?.photoURL &&
                    <Image
                      src={basicInfo?.photoURL}
                      alt="Profile"
                      className="rounded-full"
                      width={250}
                      height={150}
                    />
                  }
                  <h1 className="text-md font-bold mt-4">{basicInfo?.fname} {basicInfo?.lname}</h1>
                  <p className="text-md font-semibold">{basicInfo?.designation}</p>
                </div>
                <div className="mt-4">
                  <h1 className="text-sm font-semibold underline">DATE OF BIRTH:</h1>
                  <p className="text-sm font-semibold">{basicInfo?.dob}</p>
                </div>




                <div className="text-sm">
                  <h1 className="text-sm font-semibold underline">Address</h1>
                  <p className="text-sm font-semibold">{basicInfo?.street}{basicInfo?.city}</p>

                </div>




                <div className="mt-4" >
                  <h1 className="text-sm font-semibold underline">CONTACT:</h1>
                  <h1 className="text-sm font-semibold">{basicInfo?.email}</h1>
                  <p className="text-sm font-semibold">{basicInfo?.phone}</p>
                </div>
              </div>




              <div className="mt-4">
                <h1 className="text-sm font-semibold underline">LANGUAGE:</h1>
                {
                  language?.map((language, index) => (
                    <div key={index}>
                      <p className="text-sm font-semibold">{language?.language}</p>
                      <p className="text-sm font-semibold">{language?.proficiency}</p>
                    </div>
                  ))
                }




              </div>
              {/* skills */}
              <div className="mt-4">
                <h1 className="text-sm font-semibold underline">SKILLS:</h1>
                <ul>
                  {
                    skill?.map((skill, index) => (
                      <div key={index} >
                        <li className="text-sm font-semibold">{skill?.level}</li>
                        <li className="text-sm font-semibold">{skill?.skill}</li>
                      </div>


                    ))
                  }
                </ul>
              </div>


            </div>
          </div>

          {/* right */}
          <div className="w-3/4 h-[600px] bg-slate-50">
            <div className="p-4">
              <div >
                <h1 className="mt-10 text-2xl font-bold text-center underline">CURRICULUM VITE</h1>

                <p className="text-md font-serif mt-4"> <span className=" font-bold">OBJECTIVE:</span>{basicInfo?.about}</p>


              </div>

              <div className="mt-4 ">
                <h1 className=" font-bold ">EDUCATION</h1>
                <div className="space-y-2 bg-black">
                  <hr className=" h-1 " />
                </div>

                {
                  education?.map((education, index) => (
                    <div key={index} className=" mt-2">
                      <p className="text-sm font-semibold">{education?.degree}</p>
                      <p className="text-sm font-semibold">{education?.institute}</p>
                      <p className="text-sm font-semibold"> {new Date(education?.startDate)?.toLocaleDateString()} -- {education?.ongoing
                    ? "Present"
                    : new Date(education?.endDate)?.toLocaleDateString()}</p>

                    </div>
                  ))

                }


              </div>
              {/* experience */}
              <div className="mt-4 ">
                <h1 className=" font-bold ">EXPERIENCE</h1>
                <div className="space-y-2 bg-black">
                  <hr className=" h-1 " />
                </div>
                <div className=" mt-2">
                  <div className=" py-4">
                    {
                      employment?.map((employment, index) => (
                        <div key={index}>
                          <h2 className="text-sm font-semibold flex gap-8">{new Date(employment?.startDate)?.toLocaleDateString()}  {employment?.ongoing
                    ? "Present"
                    : new Date(employment?.endDate)?.toLocaleDateString()}</h2>
                          <h1 className="text-lg font-semibold">{employment?.jobTitle}</h1>
                          <h1 className="text-sm font-semibold">{employment?.employer}</h1>
                          <p className="text-sm ">{employment?.jobDescription}</p>


                        </div>
                      ))

                    }

                  </div>

                </div>
              </div>

            </div>



          </div>
        </div>

      </div>
    </>
  );
};

export default ClassicCv;