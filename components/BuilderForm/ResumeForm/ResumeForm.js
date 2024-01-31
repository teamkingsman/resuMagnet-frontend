"use client";
import { useContext, useState } from "react";
import EmploymentForm from "../FormComponents/EmploymentForm/EmploymentForm";
import EducationForm from "../FormComponents/EducationForm/EducationForm";
import SkillForm from "../FormComponents/SkillForm/SkillForm";
import LanguageForm from "../FormComponents/LanguageForm/LanguageForm";
import BasicInfoForm from "../FormComponents/BasicInfoForm/BasicInfoForm";
import { AuthContext } from "@/Providers/AuthProvider";
import { resumeFromPost } from "@/lib/BuilderAPI";
import ProjectForm from "../FormComponents/ProjectForm/ProjectForm";
function ResumeForm() {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  // Form data state
  const [allFormData, setAllFormData] = useState({
    basicInfo: null,
    education: [],
    employment: [],
    skills: [],
    languages: [],
    email: userEmail,
  });

  // toggle States
  const [showEmploymentForm, setShowEmploymentForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [showLanguageForm, setShowLanguageForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  // toggle buttons
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

  // get form data
  const handleBasicInfoFormSubmit = (basicInfoFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      basicInfo: basicInfoFormData,
    }));
  };
  const handleEducationFormSubmit = (educationFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, educationFormData],
    }));
  };
  const handleEmploymentFormSubmit = (employmentFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      employment: [...prevData.employment, employmentFormData],
    }));
  };
  const handleLanguageFormSubmit = (languageFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      languages: [...prevData.languages, languageFormData],
    }));
  };
  const handleSkillFormSubmit = (skillFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, skillFormData],
    }));
  };
  const handleProjectFormSubmit = (projectFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      projects: [...prevData.projects, projectFormData],
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
    <div>
      <div className="hero min-h-screen bg-main">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-whitecolor">
              Create Your Own Resume
            </h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <BasicInfoForm onSubmit={handleBasicInfoFormSubmit}></BasicInfoForm>
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
                <>
                  <EducationForm
                    onSubmit={handleEducationFormSubmit}
                  ></EducationForm>
                </>
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
                <>
                  <EmploymentForm
                    onSubmit={handleEmploymentFormSubmit}
                  ></EmploymentForm>
                </>
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
                <>
                  <SkillForm onSubmit={handleSkillFormSubmit}></SkillForm>
                </>
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
                <>
                  <LanguageForm
                    onSubmit={handleLanguageFormSubmit}
                  ></LanguageForm>
                </>
              )}

              <div className="form-control mt-4">
                <button
                  type="button"
                  className="text-left text-main font-semibold hover:font-bold hover:bg hover:border "
                  onClick={handleProjectFormToggle}
                >
                  Add Projects +
                </button>
              </div>

              {showProjectForm && (
                <>
                  <ProjectForm onSubmit={handleProjectFormSubmit}></ProjectForm>
                </>
              )}

              <div className="form-control mt-4">
                <button
                  type="button"
                  className="btn bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"
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
}

export default ResumeForm;
