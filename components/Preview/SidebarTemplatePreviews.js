'use client'
function SidebarTemplatePreviews({ onTemplateClick }) {
    return (
      <div className="w-full">
        <ul className="flex flex-col gap-4">
          <li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color" onClick={() => onTemplateClick('template1')}>Template 1</li>
          <li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color" onClick={() => onTemplateClick('template2')}>Template 2</li>
          <li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color" onClick={() => onTemplateClick('template3')}>Template 3</li>
          <li className="btn btn-block bg-main text-whitecolor hover:bg-sub_color" onClick={() => onTemplateClick('template4')}>Template 4</li>
          {/* Add more template options as needed */}
        </ul>
      </div>
    );
  }

  export default SidebarTemplatePreviews;