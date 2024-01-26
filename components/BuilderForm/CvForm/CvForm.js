"use client";
import { useState } from "react";
import EmploymentForm from "../FormComponents/EmploymentForm/EmploymentForm";
import EducationForm from "../FormComponents/EducationForm/EducationForm";
import SkillForm from "../FormComponents/SkillForm/SkillForm";
import LanguageForm from "../FormComponents/LanguageForm/LanguageForm";
import BasicInfoForm from "../FormComponents/BasicInfoForm/BasicInfoForm";

function CvForm() {
  // Form data state
  const [allFormData, setAllFormData] = useState({
    basicInfo: null,
    education: [],
    employment: [],
    skills: [],
    languages: [],
  });

  // toggle States
  const [showEmploymentForm, setShowEmploymentForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [showLanguageForm, setShowLanguageForm] = useState(false);

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

  // delete

  const handleDeleteEducation = (index) => {
    setAllFormData((prevData) => {
      const updatedEducation = [...prevData.education];
      updatedEducation.splice(index, 1);
      return { ...prevData, education: updatedEducation };
    });
  };

  const handleDeleteEmployment = (index) => {
    setAllFormData((prevData) => {
      const updatedEmployment = [...prevData.employment];
      updatedEmployment.splice(index, 1);
      return { ...prevData, employment: updatedEmployment };
    });
  };

  const handleDeleteSkill = (index) => {
    setAllFormData((prevData) => {
      const updatedSkills = [...prevData.skills];
      updatedSkills.splice(index, 1);
      return { ...prevData, skills: updatedSkills };
    });
  };

  const handleDeleteLanguage = (index) => {
    setAllFormData((prevData) => {
      const updatedLanguages = [...prevData.languages];
      updatedLanguages.splice(index, 1);
      return { ...prevData, languages: updatedLanguages };
    });
  };

  const handlePreview = () => {
    console.log(allFormData);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-main">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-main">
              Create Your Own CV
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
                  {allFormData.education.map((edu, index) => (
                    <div key={index} className="added-item">
                      <div className="overflow-x-auto bg">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>{edu.degree}</td>
                              <td>{edu.institute}</td>
                              <td>{edu.startDate}</td>
                              <td> {edu.endDate}</td>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteEducation(index)}
                                  className=" btn-circle bg-highlight_color hover:bg-sub_color  btn-sm btn-outline"
                                >
                                 X
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
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
                  {allFormData.employment.map((emp, index) => (
                    <div key={index} className="added-item">
                      <div className="overflow-x-auto">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>{emp.jobTitle}</td>
                              <td>{emp.employer}</td>
                              <td>{emp.startDate}</td>
                              <td>{emp.endDate}</td>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteEmployment(index)}
                                  className=" btn-circle bg-highlight_color hover:bg-sub_color  btn-sm btn-outline"
                                >
                                 X
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
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
                  {allFormData.skills.map((skillData, index) => (
                    <div key={index} className="added-item">
                      <div className="overflow-x-auto">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>{skillData.skill}</td>
                              <td>{skillData.level}</td>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteSkill(index)}
                                  className=" btn-circle bg-highlight_color hover:bg-sub_color  btn-sm btn-outline"
                                >
                                 X
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
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
                  {allFormData.languages.map((lang, index) => (
                    <div key={index} className="added-item">
                      <div className="overflow-x-auto">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td> {lang.language}</td>
                              <td>{lang.proficiency}</td>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteLanguage(index)}
                                  className=" btn-circle bg-highlight_color hover:bg-sub_color  btn-sm btn-outline"
                                >
                                 X
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
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

export default CvForm;
