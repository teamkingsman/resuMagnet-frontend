"use client";
import CoverLetterForm from "@/components/BuilderForm/CoverLetterForm/CoverLetterForm";
import useAuth from "@/hooks/useAuth";
import { allCoverLetter } from "@/lib/BuilderAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllCoverLetter = () => {
  const { user } = useAuth();
  const [coverLetter, setCoverLetter] = useState([]);
  useEffect(() => {
    allCoverLetter(user?.email)
      .then((res) => setCoverLetter(res))
      .catch((err) => console.log(err));
  }, [user?.email]);
  console.log(coverLetter);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-7 pl-2 mt-16 my-4 gap-3">
      {coverLetter.map((item, index) => (
        <Link key={item._Id} href={`/dashboard/cover-letter/${item._id}`}>
          <div className="flex  py-8 px-6 bg-base-100 shadow-xl justify-center">
            <div className="">
              <div className=" flex justify-center items-center"></div>
              <h2 className="md:text-2xl text-xl">
                CoverLetter template {index + 1}
              </h2>
            </div>
          </div>
        </Link>
      ))}
  
    </div>
    {coverLetter.length === 0 && <CoverLetterForm />}
    </div>
  );
};

export default AllCoverLetter;
