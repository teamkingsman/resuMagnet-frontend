import Image from "next/image";

const PremiumCv = ({ cv }) => {
  // console.log(cv);
  const { basicInfo, education, employment, skill, language, projects } = cv;
  return (
    <>
      <div className=" mt-8 font-serif bg-slate-400  lg:w-[800px] h-[700px] mx-auto shadow-2xl ">
        <div className="p-4 ml-4">
          <div className="mt-4 ">
            <div>
              <h1 className="text-3xl font-bold ">
                {basicInfo.fname} {basicInfo.lname}
              </h1>
              <h1 className="text-xl font-bold ">{basicInfo.designation}</h1>
              <div className="flex mt-4 justify-between">
                <div className="">
                  <h1 className="text-md  ">{basicInfo.email}</h1>
                  <h1 className="text-md ">{basicInfo.phone}</h1>
                  <h1 className="text-md  ">Date of birth:{basicInfo.dob}</h1>
                  <h1 className="text-md  ">
                    nationality:{basicInfo.nationality}
                  </h1>
                </div>

                <div>
                  <h1 className="text-md ">Country:{basicInfo.country}</h1>
                  <h1 className="text-md  ">City:{basicInfo.city}</h1>
                  <h1 className="text-md  ">postal code:{basicInfo.postal}</h1>
                </div>

                <div>
                  {basicInfo?.photoURL && (
                    <Image
                      src={basicInfo?.photoURL}
                      alt="Profile"
                      className="rounded-full"
                      width={250}
                      height={150}
                    />
                  )}
                </div>
              </div>
              <div className="space-y-4 w-[750px] mx-auto bg-black">
                <hr className=" h-1" />
              </div>
            </div>

            {/* personalInformation */}
            {/* objective */}
            <div>
              <h1 className="text-xl font-bold">summary:</h1>
              <div>
                <p>{basicInfo.about}</p>
              </div>
            </div>
          </div>

          {/* experience */}
          <h1 className="text-xl font-bold">Experience:</h1>
          <div className="space-y-1 w-[750px] mx-auto bg-black  ">
            <hr className=" h-1" />
          </div>
          {employment?.map((employment, index) => (
            <div key={index}>
              <div className="flex gap-8">
                <h1 className="text-md font-bold">{employment?.startDate}</h1>
                <div>
                  <h1 className="text-md font-bold">{employment?.jobTitle}</h1>
                  <h1 className="text-md font-bold">{employment?.employer}</h1>
                  <p>{employment?.jobDescription}</p>
                </div>
              </div>
            </div>
          ))}
          {/* education */}
          <div>
            <h1 className="text-xl font-bold">Education:</h1>
            <hr className="bg-black" />

            {education?.map((education, index) => (
              <div key={index} className="flex gap-8">
                <h1 className="text-md font-bold">{education?.startDate}</h1>
                <div>
                  <h1 className="text-md font-bold">{education?.degree}</h1>
                  <h1 className="text-md font-bold">{education?.institute}</h1>
                </div>
              </div>
            ))}
          </div>
          {/* skills */}
          <div>
            <h1 className="text-xl font-bold">Skills:</h1>
            <hr className="bg-black" />
            {skill?.map((skill, index) => (
              <div key={index} className="ml-28">
                <h1 className="text-md">{skill?.skill}</h1>
              </div>
            ))}
          </div>
          {/* language */}
          <div>
            <h1 className="text-xl font-bold">Language:</h1>
            <hr className="bg-black" />
            {language?.map((language, index) => (
              <div key={index} className="ml-28 ">
                <div className="flex gap-8">
                  <h1 className="text-md">{language?.language}</h1>
                  <h1 className="text-md">{language?.proficiency}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumCv;
