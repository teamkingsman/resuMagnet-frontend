import Image from "next/image";
import img from "@/assets/template-img.jpg";
const Template = () => {
  return (
    <div className=" py-20 mb-20 bg-neutral-100">
      <div className="flex gap-16 max-w-[2520px] mx-auto xl:px-20 md:pr-10 sm:px-2 px-4">
        <div className="flex-1 space-y-9 pl-6">
          <h1 className="text-3xl md:text-5xl font-semibold">The Right <span className="text-highlight_color">Resume</span> & <span className="text-highlight_color">CV</span> Maker for the Job</h1>
          <p className="text-2xl md:text-3xl text-neutral-600">
            Tech, Engineering, Management or Marketing - CV generator with the
            right resume templates to highlight your career journey.
          </p>
          <button className="text-2xl border px-8 hover:px-9 py-4 rounded-lg shadow-highlight_color shadow-lg hover:shadow-sub_color hover:shadow-xl bg-sub_color text-neutral-50 hover:bg-highlight_color hover:text-main  font-semibold ">Explore all template</button>

        </div>
        <div className="flex-1 ">
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
