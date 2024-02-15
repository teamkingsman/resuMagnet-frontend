"use client";
import React, { useEffect, useState } from "react";
import EmploymentForm from "../FormComponents/EmploymentForm/EmploymentForm";
import EducationForm from "../FormComponents/EducationForm/EducationForm";
import SkillForm from "../FormComponents/SkillForm/SkillForm";
import LanguageForm from "../FormComponents/LanguageForm/LanguageForm";
import BasicInfoForm from "../FormComponents/BasicInfoForm/BasicInfoForm";
import ProjectForm from "../FormComponents/ProjectForm/ProjectForm";
import {  resumeFromGetById, resumeFromPost } from "@/lib/BuilderAPI";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const ResumeForm = ({params}) => {
  const router = useRouter();
  const { user } = useAuth();
  const [allFormData, setAllFormData] = useState({
    basicInfo: [],
    education: [],
    employment: [],
    languages: [],
    projects: [],
    skills: [],
  });

  const email = user?.email;
  const [resumeData, setResumeData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await resumeFromGetById(params);
        setResumeData(data);
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };
    fetchData();
  }, [params]);
  console.log(resumeData);


  const [showEmploymentForm, setShowEmploymentForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [showLanguageForm, setShowLanguageForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const handleEmploymentFormToggle = () => {
    setShowEmploymentForm(!showEmploymentForm);
  };

  const handleEducationFormToggle = () => {
    setShowEducationForm(!showEducationForm);
  };

  const handleSkillFormToggle = () => {
    setShowSkillForm(!showSkillForm);
  };

  const handleLanguageFormToggle = () => {
    setShowLanguageForm(!showLanguageForm);
  };

  const handleProjectFormToggle = () => {
    setShowProjectForm(!showProjectForm);
  };

  const handleBasicInfoDataChange = (basicInfoFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      basicInfo: basicInfoFormData,
    }));
  };

  const handleEducationDataChange = (educationFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      education: educationFormData,
    }));
  };

  const handleEmploymentDataChange = (employmentFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      employment: employmentFormData,
    }));
  };

  const handleLanguageDataChange = (languageFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      languages: languageFormData,
    }));
  };

  const handleSkillDataChange = (skillFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      skills: skillFormData,
    }));
  };

  const handleProjectDataChange = (projectFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      projects: projectFormData,
    }));
  };

  const handlePreview = async () => {
    try {
      const mergedData = {
        basicInfo: { ...resumeData.basicInfo, ...allFormData.basicInfo },
        education: [...resumeData.education, ...allFormData.education],
        employment: [...resumeData.employment, ...allFormData.employment],
        skills: [...resumeData.skills, ...allFormData.skills],
        languages: [...resumeData.languages, ...allFormData.languages],
        projects: [...resumeData.projects, ...allFormData.projects],
        userEmail:user?.email,
      };
      console.log(mergedData);
      const response = await resumeFromPost(mergedData);
      console.log("Resume data sent successfully", response);
      // router.push("dashboard/resume/preview");
    } catch (error) {
      console.error("Error sending resume data", error);
    }
  };
  

  return (
    <div className="hero min-h-screen my-16 ">
      <div className="bg-main p-8 rounded-xl">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-whitecolor">
              Create Your Own Resume
            </h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <BasicInfoForm
              onChange={handleBasicInfoDataChange}
              basicInfo={resumeData?.basicInfo}
            />
            <div className="card-body">
              <div className="form-control mt-4">
                <button
                  type="button"
                  className="text-left text-main font-semibold hover:font-bold hover:bg hover:border "
                  onClick={handleEducationFormToggle}
                >
                  Add Education History +
                </button>
              </div>

              {showEducationForm && (
                <EducationForm
                  onChange={handleEducationDataChange}
                  education={resumeData?.education}
                ></EducationForm>
              )}

              <div className="form-control mt-4">
                <button
                  type="button"
                  className="text-left text-main font-semibold hover:font-bold hover:bg hover:border "
                  onClick={handleEmploymentFormToggle}
                >
                  Add Employment History +
                </button>
              </div>

              {showEmploymentForm && (
                <EmploymentForm
                  onChange={handleEmploymentDataChange}
                  employment={resumeData?.employment}
                ></EmploymentForm>
              )}

              <div className="form-control mt-4">
                <button
                  type="button"
                  className="text-left text-main font-semibold hover:font-bold hover:bg hover:border "
                  onClick={handleSkillFormToggle}
                >
                  Add Skills +
                </button>
              </div>

              {showSkillForm && (
                <SkillForm
                  onChange={handleSkillDataChange}
                  skill={resumeData?.skills }
                ></SkillForm>
              )}

              <div className="form-control mt-4">
                <button
                  type="button"
                  className="text-left text-main font-semibold hover:font-bold hover:bg hover:border "
                  onClick={handleLanguageFormToggle}
                >
                  Add Languages +
                </button>
              </div>

              {showLanguageForm && (
                <LanguageForm
                  onChange={handleLanguageDataChange}
                  language={resumeData?.languages}
                ></LanguageForm>
              )}

              <div className="form-control mt-4">
                <button
                  type="button"
                  className="text-left text-main font-semibold hover:font-bold hover:bg hover:border"
                  onClick={handleProjectFormToggle}
                >
                  Add Projects +
                </button>
              </div>

              {showProjectForm && (
                <ProjectForm
                  onChange={handleProjectDataChange}
                  projects={resumeData?.projects}
                ></ProjectForm>
              )}

              <div className="form-control mt-4">
                <button
                  type="button"
                  className="btn bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:bg-sub_color"
                  onClick={handlePreview}
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
