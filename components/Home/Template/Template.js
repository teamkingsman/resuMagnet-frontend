import Image from "next/image";
import img from "@/assets/template-img.jpg";
const Template = () => {
  return (
    <div className=" py-16 mb-20 bg-[#fff7ed]">
      <div className="md:flex gap-16 max-w-[2520px] mx-auto xl:px-20 md:pr-10 sm:px-2 px-4">
        <div className="flex-1 mt-10 space-y-9 pl-6">
          <h1 className="text-3xl md:text-4xl font-semibold">The Right <span className="text-highlight_color">Resume</span> & <span className="text-highlight_color">CV</span> Maker for the Job</h1>
          <p className="text-xl md:text-2xl text-neutral-600">
            Tech, Engineering, Management or Marketing - CV generator with the
            right resume templates to highlight your career journey.
          </p>
          <button className="text-base md:text-xl border px-4 hover:px-5 md:px-8  md:hover:px-9 py-3 md:py-4 rounded-full shadow-highlight_color shadow-lg hover:shadow-sub_color hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold ">Explore all template</button>

        </div>
        <div className="flex-1 pt-10">
          <Image
            src={img}
            width={500}
            height={400}
            className=""
            alt="template img"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Template;
