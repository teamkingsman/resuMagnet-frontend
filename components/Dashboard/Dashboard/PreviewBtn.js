import Link from "next/link";
import { SiReacthookform } from "react-icons/si";const LinkBtn = ({ title, href ,discription }) => {
//   console.log(title, href);
  return (
    <div className="">
      <Link href={href}>
        <div className="h-full flex flex-col md:pl-5 px-2 py-5  w-full  hover:text-sub_color hover:shadow-lg hover:shadow-main bg-neutral-200 hover:bg-whitecolor rounded-br-3xl rounded-s-3xl">
          <SiReacthookform  className=" sm:text-4xl md:text-5xl" />
          <h2 className="sm:text-xl md:text-xl lg:text-2xl font-medium">{title}</h2>
          <h4 className="">{discription}</h4>
        </div>
      </Link>
    </div>
  );
};

export default LinkBtn;
