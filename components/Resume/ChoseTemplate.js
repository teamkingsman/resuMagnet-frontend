"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const ChoseTemplate = () => {
    const router = useRouter();

    const handleTemplateSelection = (templateName) => {
      router.push(`/dashboard/resume/${templateName}`);
    };
  return (
    <div>
        <ul className="flex flex-col gap-4">
        <li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color" onClick={() => handleTemplateSelection('template1')}>Template 1</li>
        <li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color" onClick={() => handleTemplateSelection('template2')}>Template 2</li>
        <li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color" onClick={() => handleTemplateSelection('template3')}>Template 3</li>
        <li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color" onClick={() => handleTemplateSelection('template4')}>Template 4</li>
      </ul>




         {/* <ul className="flex flex-col gap-4">
          <Link href="/dashboard/resume/preview?template=template1"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 1</li></Link>
          <Link href="/dashboard/resume/preview?template=template2"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 2</li></Link>
          <Link href="/dashboard/resume/preview?template=template3"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 3</li></Link>
          <Link href="/dashboard/resume/preview?template=template4"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 4</li></Link>

        </ul> */}

    </div>
  );
};

export default ChoseTemplate;
