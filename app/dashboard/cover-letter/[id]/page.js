"use client"
import CoverLetterForm from '@/components/BuilderForm/CoverLetterForm/CoverLetterForm';
import { useRouter } from 'next/navigation';
import React from 'react';

const CoverLetterTemplatePage = ({params}) => {
    console.log(params);
    // const router = useRouter();
    return (
        <div>
            <CoverLetterForm params={params.id}></CoverLetterForm>
        </div>
    );
};

export default CoverLetterTemplatePage;