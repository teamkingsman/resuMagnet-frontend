import Image from "next/image";
import img from "@/assets/template-img.jpg";
import Link from "next/link";
const Template = () => {
  return (
    <div className="py-10  bg-gradient-to-r from-[#EAF2F8] to-[#FDF2E9] ...">
      <div className="flex flex-col md:flex-row justify-evenly items-center justify-items-center gap-16 max-w-[2520px] mx-auto xl:px-20 md:pr-10 sm:px-2 px-4">
      <div className=" pt-10">
          <Image
            src={img}
            width="auto"
            height="auto"
            className="aspect-auto w-full object-center"
            alt="template img"
          ></Image>
        </div>
        <div className="mt-10 space-y-9 pl-6">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-5xl">The Right <span className="text-highlight_color">Resume</span> & <span className="text-highlight_color">CV</span> Maker for the Job</h1>
          <p className="text-base md:text-xl my-6">
            Tech, Engineering, Management or Marketing - CV generator with the
            right resume templates to highlight your career journey.
          </p>
          <Link href='/components/Temp/allTemplate.js'>
            
            <button className="text-base md:text-xl border px-4 hover:px-5 md:px-8  md:hover:px-9 py-3 md:py-4 rounded-full shadow-highlight_color shadow-lg hover:shadow-sub_color hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold ">Explore all template</button>
            
            </Link>

        </div>
        
      </div>
    </div>
  );
};

export default Template;
