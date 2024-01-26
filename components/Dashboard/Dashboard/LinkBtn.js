import Link from "next/link";
import { IoMdAddCircle } from "react-icons/io";
const LinkBtn = ({ title, href }) => {
//   console.log(title, href);
  return (
    <div className="">
      <Link href={href}>
        <div className="h-32 flex flex-col items-center justify-center  w-full text-center hover:text-sub_color hover:shadow-lg hover:shadow-main bg-neutral-100 hover:bg-whitecolor">
          <IoMdAddCircle className="mx-auto sm:text-3xl md:text-4xl" />
          <h2 className="sm:text-lg md:text-xl lg:text-3xl">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default LinkBtn;
