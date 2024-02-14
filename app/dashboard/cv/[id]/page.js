"use client"
import CvForm from '@/components/BuilderForm/CvForm/CvForm';
import React from 'react';

const cvTemplatePage = ({params}) => {
    console.log(params);
    return (
        <div>
            <CvForm params={params}></CvForm>
        </div>
    );
};

export default cvTemplatePage;