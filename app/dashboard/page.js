// import Image from "next/image";
// import img from "@/assets/dashboard-img.jpg";
import LinkBtn from "@/components/Dashboard/Dashboard/LinkBtn";
import PreviewBtn from "@/components/Dashboard/Dashboard/PreviewBtn";
// export const metadata = {
//   title: "Dashboard",
//   description: "This is a Dashboard page",
// };
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
const PreviewData = [
  {
    title: "My Resume",
    href: "/dashboard/resume/preview",
    discription: "you can see your previous resume"
  },
  {
    title: "My Cover Letter",
    href: "/dashboard/cover-letter/preview",
    discription: "you can see your previous resume"
  },
  {
    title: "My CV",
    href: "/dashboard/cv/preview",
    discription: "you can see your previous resume"
  },
];
const Dashboard = () => {
  return (
    <div className="py-14 lg:py-4">
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
        {/* previews template section */}
      <div className="mt-4 grid grid-cols-3 gap-4">
          {PreviewData.map((item) => (
            <PreviewBtn key={item.title} title={item.title} href={item.href} discription={item.discription}></PreviewBtn>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
