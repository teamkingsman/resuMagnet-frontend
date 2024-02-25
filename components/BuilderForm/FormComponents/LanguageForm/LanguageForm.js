"use client";
import React, { useState } from "react";

function LanguageForm({ onChange, languages: initialLanguages }) {
  const [languages, setLanguages] = useState(
    initialLanguages
      ? Object.values(initialLanguages)
      : [
          {
            id: 1,
            language: "",
            proficiency: "",
          },
        ]
  );

  const handleLanguageChange = (e, id) => {
    const { name, value } = e.target;
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang) =>
        lang.id === id ? { ...lang, [name]: value } : lang
      )
    );
  };

  const addMoreLanguage = () => {
    setLanguages((prevLanguages) => [
      ...prevLanguages,
      {
        id: prevLanguages.length + 1,
        language: "",
        proficiency: "",
      },
    ]);
  };

  // Call onChange with the updated languages state
  const handleOnChange = () => {
    onChange(languages);
  };

  return (
    <div className="md:flex flex-col justify-center gap-4 mt-4">
      {languages?.map((lang) => (
        <div key={`language-${lang.id}`}>
          <h1 className="text-center font-extrabold py-2 text-2xl">
            Language {lang.id}
          </h1>
          <div className="md:flex justify-between gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Language
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Language"
                className="input bg-base-300"
                name="language"
                value={lang.language}
                onChange={(e) => handleLanguageChange(e, lang.id)}
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Proficiency
                </span>
              </label>
              <select
                value={lang.proficiency}
                onChange={(e) => handleLanguageChange(e, lang.id)}
                className="select select-bordered bg-base-300"
                name="proficiency"
                required
              >
                <option value="" disabled>
                  Select Proficiency
                </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="fluent">Fluent</option>
              </select>
            </div>
          </div>
        </div>
      ))}

      <div className="form-control mt-4">
        <button
          type="button"
          onClick={() => {
            addMoreLanguage();
            handleOnChange();
          }}
          className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border"
        >
          Add More Language +
        </button>
      </div>
    </div>
  );
}

export default LanguageForm;