"use client";
import useAuth from "@/hooks/useAuth";
import { allCv } from "@/lib/BuilderAPI";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllCvTemplate = () => {
  const { user } = useAuth();
  const [cv, setCv] = useState([]);
  useEffect(() => {
    allCv(user.email)
      .then((res) => setCv(res))
      .catch((err) => console.log(err));
  }, [user.email]);
  console.log(cv);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-7 pl-2 mt-16 my-4 gap-3">
      {cv.map((item, index) => (
        <Link key={item._Id} href={`/dashboard/cv/${item._id}`}>
          <div className="flex  py-8 px-6 bg-base-100 shadow-xl justify-center">
            <div className="">
              <div className=" flex justify-center items-center"></div>
              <h2 className="md:text-2xl text-xl">
                CV template {index + 1}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllCvTemplate;
