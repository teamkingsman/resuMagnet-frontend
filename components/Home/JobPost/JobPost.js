import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import AllPost from "./AllPost/AllPost";
import DemoPost from "./DemoPost/DemoPost";
import Link from "next/link";

function JobPost() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-whitecolor space-y-4 p-4 pt-5">
      <h1 className="text-5xl font-semibold text-main uppercase">JobHub</h1>
      <p className="text-2xl font-medium text-main">
        {" "}
        Welcome to JobHub, where careers take flight and opportunities abound!
        Our dynamic platform serves as the nexus for job seekers and employers,
        fostering a community-driven approach to professional growth.
      </p>
      <CreatePost></CreatePost>
      <DemoPost></DemoPost>
      <div className="px-8 w-full">
        <Link href="/jobhub">
          <button
            type="submit"
            className="flex items-center justify-center btn btn-sm bg-main border border-main text-neutral-50 font-bold w-full rounded-md overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:bg-sub_color"
          >
            view all
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobPost;
