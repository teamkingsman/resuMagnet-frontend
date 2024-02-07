"use client";
import { useState } from "react";
import EmploymentForm from "../FormComponents/EmploymentForm/EmploymentForm";
import EducationForm from "../FormComponents/EducationForm/EducationForm";
import SkillForm from "../FormComponents/SkillForm/SkillForm";
import LanguageForm from "../FormComponents/LanguageForm/LanguageForm";
import BasicInfoForm from "../FormComponents/BasicInfoForm/BasicInfoForm";
import ExtraActivitiesForm from "../FormComponents/ExtraActivitiesForm/ExtraActivitiesForm";
import { cvFromPost } from "@/lib/BuilderAPI";
import ProjectForm from "../FormComponents/ProjectForm/ProjectForm";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

function CvForm() {
  const router = useRouter();

  const { user } = useAuth();
  const userEmail = user.email;

  const [allFormData, setAllFormData] = useState({
    basicInfo: [],
    education: [],
    employment: [],
    languages: [],
    projects: [],
    skills: [],
    extraActivities: [],
    userEmail: userEmail,
  });

  const cvData = {
    basicInfo: {
      designation: "Mern Stack Developer",
      photoURL:
        "https://res.cloudinary.com/dxox3wiq1/image/upload/v1707156846/poto_plc2na.jpg",
      fname: "Md Sakib",
      lname: "Hossain",
      email: "Mskib567@gmai.com",
      phone: "01955703819",
      country: "Bangladesh",
      city: "Narayanganj",
      street: "BSCIC Road,Kanchpur",
      postal: "1430",
      dob: "1999-11-28",
      nationality: "Bangladeshi",
      about: "dfgdfgdfgdf",
    },
    education: [
      {
        id: 1,
        degree: "Bsc in CSE",
        institute: "National University Of Bangladesh",
        startDate: "2018-05-28",
        endDate: "2022-05-02",
        ongoing: false,
        educationDescription: "gdgrftghrtf",
      },
      {
        id: 2,
        degree: "HSC",
        institute: "GiasUddin Islamic Model College",
        startDate: "2015-05-28",
        endDate: "2017-05-28",
        ongoing: false,
        educationDescription: "gdgdfgdff",
      },
    ],
    employment: [
      {
        id: 1,
        jobTitle: "dgdfgdfg",
        employer: "dfdfgdfg",
        startDate: "2018-05-28",
        endDate: "2018-05-28",
        jobDescription: "df",
      },
      {
        id: 2,
        jobTitle: "ddfgdfgfg",
        employer: "dfdfgdfg",
        startDate: "2018-05-28",
        endDate: "2018-05-28",
        jobDescription: "dgdfgdff",
      },
    ],
    projects: [
      {
        id: 1,
        title: "gdgdfgf",
        type: "dfdfgdfgg",
        liveLink: "ddfgdfgfg",
        description: "ddfgdff",
        githubLink: "dfdfgdfg",
      },
      {
        id: 2,
        title: "ggdfgddf",
        type: "dfdfgdfg",
        liveLink: "dfdfgdfg",
        description: "ddfgdff",
        githubLink: "ddfgdffg",
      },
    ],
    email: "mskib567@gmail.com",
    skill: [
      {
        id: 1,
        skill: "dfggdfgdfdf",
        level: "Advanced",
      },
      {
        id: 2,
        skill: "dfgdf",
        level: "Intermediate",
      },
    ],
    language: [
      {
        id: 1,
        language: "ffsdfdg",
        proficiency: "Fluent",
      },
      {
        id: 2,
        language: "ffsdfsdg",
        proficiency: "Intermediate",
      },
    ],
    extraActivities: [
      {
        id: 1,
        activity: "Volunteer Work",
        organization: "Red Cross",
        startDate: "2021-01-01",
        endDate: "2021-06-30",
        description: "Helping with disaster relief efforts.",
      },
      {
        id: 2,
        activity: "Volunteer Work",
        organization: "Red Cross",
        startDate: "2021-01-01",
        endDate: "2021-06-30",
        description: "Helping with disaster relief efforts.",
      },
    ],
  };

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

  const handleExtraActivitiesDataChange = (extraActivitiesFormData) => {
    setAllFormData((prevData) => ({
      ...prevData,
      extraActivities: extraActivitiesFormData,
    }));
  };

  const handlePreview = async () => {
    console.log(allFormData);
    try {
      const response = await cvFromPost(allFormData);
      console.log("CV data sent successfully", response);
      // router.push("dashboard/cover-letter/preview");
    } catch (error) {
      console.error("Error sending CV data", error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-main">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-whitecolor">
              Create Your Own CV
            </h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <BasicInfoForm
              onChange={handleBasicInfoDataChange}
              basicInfo={cvData.basicInfo}
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
                  education={cvData.education}
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
                  employment={cvData.employment}
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
                  skill={cvData.skill}
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
                  language={cvData.language}
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
                  projects={cvData.projects}
                ></ProjectForm>
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
                  extraActivities={cvData.extraActivities}
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
