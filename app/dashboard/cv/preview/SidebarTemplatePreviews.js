
import Link from "next/link";

function SidebarTemplatePreviews() {
  
    return (
      <div className="w-full">
        <ul className="flex flex-col gap-4">

          <Link prefetch href="/dashboard/cv/preview?template=template1"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 1</li></Link>
          <Link prefetch href="/dashboard/cv/preview?template=template2"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 2</li></Link>
          <Link prefetch href="/dashboard/cv/preview?template=template3"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 3</li></Link>
          <Link prefetch href="/dashboard/cv/preview?template=template4"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 4</li></Link>
          <Link prefetch href="/dashboard/cv/preview?template=template5"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 5</li></Link>
          <Link prefetch href="/dashboard/cv/preview?template=template6"><li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color">Template 6</li></Link>          
          {/* Add more template options as needed */}
        </ul>
      </div>
    );
  }

  export default SidebarTemplatePreviews;