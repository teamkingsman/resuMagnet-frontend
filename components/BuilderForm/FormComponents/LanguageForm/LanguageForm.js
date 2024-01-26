// Used in Resume
"use client";
import React, { useState } from "react";

function LanguageForm({onSubmit}) {
  const [selectedProficiency, setSelectedProficiency] = useState("");
  const [language, setLanguage] = useState("");

  const handleProficiencyChange = (e) => {
    setSelectedProficiency(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const formData = {
      language,
      proficiency: selectedProficiency,
    };
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleForm}
      className="md:flex flex-col justify-center gap-4 mt-4"
    >
      <div className="md:flex justify-center gap-4">
        <div className="form-control">
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
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Proficiency
            </span>
          </label>
          <select
            value={selectedProficiency}
            onChange={handleProficiencyChange}
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
      <div className="form-control mt-4">
        <button
          type="submit"
          className="btn-sm bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default LanguageForm;
