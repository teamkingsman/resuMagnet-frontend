"use client";
import { useEffect, useState } from "react";
import EmploymentForm from "../FormComponents/EmploymentForm/EmploymentForm";
import EducationForm from "../FormComponents/EducationForm/EducationForm";
import SkillForm from "../FormComponents/SkillForm/SkillForm";
import LanguageForm from "../FormComponents/LanguageForm/LanguageForm";
import BasicInfoForm from "../FormComponents/BasicInfoForm/BasicInfoForm";
import ExtraActivitiesForm from "../FormComponents/ExtraActivitiesForm/ExtraActivitiesForm";
import { cvFromGetById, cvFromPost } from "@/lib/BuilderAPI";
import ProjectForm from "../FormComponents/ProjectForm/ProjectForm";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

function CvForm({ params }) {
  const router = useRouter();
  const { user } = useAuth();
  const [allFormData, setAllFormData] = useState({
    basicInfo: {},
    educations: [],
    employments: [],
    languages: [],
    projects: [],
    skills: [],
    extraActivities: [],
  });

  const [cvData, setCvData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cvFromGetById(params);
        setCvData(data);
      } catch (error) {
        console.error("Error fetching cv data:", error);
      }
    };
    fetchData();
  }, [params]);

  const [showEmploymentForm, setShowEmploymentForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [showLanguageForm, setShowLanguageForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showExtraActivitiesForm, setShowExtraActivitiesForm] = useState(false);

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

  const handleExtraActivitiesFormToggle = () => {
    setShowExtraActivitiesForm(!showExtraActivitiesForm);
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
      educations: educationFormData,
    }));
  };

  const handleEmploymentDataChange = (employmentFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      employments: employmentFormData,
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

  const handleExtraActivitiesDataChange = (extraActivitiesFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      extraActivities: extraActivitiesFormData,
    }));
  };

  const handlePreview = async () => {
    try {
      
      const mergedData = {
        basicInfo: { ...cvData?.basicInfo, ...allFormData.basicInfo },
        educations: [...(cvData?.educations || []), ...allFormData.educations],
        employments: [...(cvData?.employments || []), ...allFormData.employments],
        skills: [...(cvData?.skills || []), ...allFormData.skills],
        languages: [...(cvData?.languages || []), ...allFormData.languages],
        projects: [...(cvData?.projects || []), ...allFormData.projects],
        userEmail: user?.email,
      };
    
      mergedData.educations = Array.from(
        new Set(mergedData.educations.map(JSON.stringify))
      ).map(JSON.parse);
      mergedData.employments = Array.from(
        new Set(mergedData.employments.map(JSON.stringify))
      ).map(JSON.parse);
      mergedData.skills = Array.from(
        new Set(mergedData.skills.map(JSON.stringify))
      ).map(JSON.parse);
      mergedData.languages = Array.from(
        new Set(mergedData.languages.map(JSON.stringify))
      ).map(JSON.parse);
      mergedData.projects = Array.from(
        new Set(mergedData.projects.map(JSON.stringify))
      ).map(JSON.parse);
      mergedData.extraActivities = Array.from(
        new Set(mergedData.extraActivities.map(JSON.stringify))
      ).map(JSON.parse);

      console.log(mergedData);

      const response = await cvFromPost(mergedData);
      console.log("CV data sent successfully", response);
      router.push("/dashboard/cv/preview");
    } catch (error) {
      console.error("Error sending CV data", error);
    }
  };

  return (
    <div className="hero min-h-screen my-16 ">
      <div className="bg-main p-8 rounded-xl">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-whitecolor">
              Create Your Own CV
            </h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <BasicInfoForm
              onChange={handleBasicInfoDataChange}
              basicInfo={cvData?.basicInfo}
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
                  educations={cvData?.educations}
                />
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
                  employments={cvData?.employments}
                />
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
                  skills={cvData?.skills}
                />
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
                  languages={cvData?.languages}
                />
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
                  projects={cvData?.projects}
                />
              )}

              <div className="form-control mt-4">
                <button
                  type="button"
                  className="text-left text-main font-semibold hover:font-bold hover:bg hover:border"
                  onClick={handleExtraActivitiesFormToggle}
                >
                  Add Extra Activities +
                </button>
              </div>

              {showExtraActivitiesForm && (
                <ExtraActivitiesForm
                  onChange={handleExtraActivitiesDataChange}
                  extraActivities={cvData?.extraActivities}
                />
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
}

export default CvForm;
