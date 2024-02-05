'use client'
import SidebarTemplatePreviews from '@/app/dashboard/cv/preview/SidebarTemplatePreviews';
import MainTemplatePreview from './MainTemplatePreview'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const TempletesPreview = () => {
  //   const router = useRouter();

  // // Other template data or components...

  // const handleTemplateClick = (template) => {
  //   setSelectedTemplate(template);
  //   // You can also update the URL based on the selected template if needed
  //   // router.push(`/resume/preview?template=${template}`);
  // };
    return (
        <div className="grid grid-cols-12 gap-4 w-full mt-4">
                    <div className="col-span-2 ">
                        {/* side bar goes here */}
                        <SidebarTemplatePreviews/>
                    </div>
                    <div className='col-span-10'>
                    <MainTemplatePreview />
                   </div>
                    </div>
    );
};

export default TempletesPreview;