import AllPost from "@/components/Home/JobPost/AllPost/AllPost";
import CreatePost from "@/components/Home/JobPost/CreatePost/CreatePost";

function JobHub() {
  return (
    <div className="xl:px-20 md:px-10 sm:px-2 px-4 my-4 pt-10 ">
      <div className="flex flex-col items-center justify-center text-center space-y-2 p-4">
        <h1 className="text-5xl font-semibold text-sub_color">JobHub</h1>
        <p className="text-2xl font-medium text-main">
          {" "}
          Welcome to JobHub, where careers take flight and opportunities abound!
          Our dynamic platform serves as the nexus for job seekers and
          employers, fostering a community-driven approach to professional
          growth.
        </p>
        <CreatePost></CreatePost>
        <AllPost></AllPost>
      </div>
    </div>
  );
}

export default JobHub;
