"use client";
import React, { useContext, useState } from "react";
import EmploymentForm from "../FormComponents/EmploymentForm/EmploymentForm";
import EducationForm from "../FormComponents/EducationForm/EducationForm";
import SkillForm from "../FormComponents/SkillForm/SkillForm";
import LanguageForm from "../FormComponents/LanguageForm/LanguageForm";
import BasicInfoForm from "../FormComponents/BasicInfoForm/BasicInfoForm";
import ProjectForm from "../FormComponents/ProjectForm/ProjectForm";
import { AuthContext } from "@/Providers/AuthProvider";
import { resumeFromPost } from "@/lib/BuilderAPI";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const ResumeForm = () => {
  const router = useRouter()
  const { user } = useAuth();

function ResumeForm() {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  const [allFormData, setAllFormData] = useState({
    basicInfo: null,
    education: [],
    employment: [],
    languages: [],
    projects: [],
    skills: [],
    userEmail: userEmail,
  });

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
    console.log(allFormData);
    try {
      const response = await resumeFromPost(allFormData);
      console.log("Resume data sent successfully", response);
    } catch (error) {
      console.error("Error sending resume data", error);
    }
  };

  return (
      <div className="hero min-h-screen bg-main">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-whitecolor">
              Create Your Own Resume
            </h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <BasicInfoForm onChange={handleBasicInfoDataChange} />
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
                <SkillForm onChange={handleSkillDataChange}></SkillForm>
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
                <ProjectForm onChange={handleProjectDataChange}></ProjectForm>
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
  );
}
}

export default ResumeForm;
