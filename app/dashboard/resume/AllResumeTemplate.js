"use client";
import Dashboard from "@/app/dashboard/page";
import ResumeForm from "@/components/BuilderForm/ResumeForm/ResumeForm";
import useAuth from "@/hooks/useAuth";
import { allResume } from "@/lib/BuilderAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllResumeTemplate = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  useEffect(() => {
    allResume(user.email)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [user.email]);
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-7 pl-2 mt-16 my-4 gap-3">
      {data.map((item, index) => (
        <Link key={item._Id} href={`/dashboard/resume/${item._id}`}>
          <div className=" flex  py-8 px-6 bg-base-100 hover:bg-neutral-50 shadow-xl justify-center">
            <div className="">
             
              <h2 className="md:text-2xl text-xl">Resume template {index + 1}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
    {data.length === 0 && <ResumeForm />}
    </div>
  );
};

export default AllResumeTemplate;