"use client";
import ResumeForm from '@/components/BuilderForm/ResumeForm/ResumeForm';
import React from 'react';

const ResumeTemplatePage = ({params}) => {
    console.log(params);
  
    return (
        <div>
            <ResumeForm params={params.id} ></ResumeForm>
        </div>
    );
};

export default ResumeTemplatePage;