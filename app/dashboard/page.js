// import Image from "next/image";
// import img from "@/assets/dashboard-img.jpg";
import LinkBtn from "@/components/Dashboard/Dashboard/LinkBtn";
export const metadata = {
  title: "Dashboard",
  description: "This is a Dashboard page",
};
const LinkData = [
  {
    title: "New Resume",
    href: "/dashboard/resume",
  },
  {
    title: "New Cover Letter",
    href: "/dashboard/cover-letter",
  },
  {
    title: "New CV",
    href: "/dashboard/cv",
  },
];
const Dashboard = () => {
  return (
    <div>
      <div className="lg:mx-3 lg:pl-8 mt-3">
        <div
          className="hero min-h-[40vh]"
          style={{
            backgroundImage: "url(https://i.ibb.co/BCc7vHn/dashbord-img.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <p className="text-xl md:text-3xl font-semibold mb-5">
                Show employers your data skills with an interactive Resume, Cv,
                Cover Letter
              </p>
              <button className="btn rounded-full btn-sm md:btn-md lg:btn-lg shadow-highlight_color shadow-lg hover:shadow-sub_color hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {LinkData.map((item) => (
            <LinkBtn key={item.title} title={item.title} href={item.href}></LinkBtn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;