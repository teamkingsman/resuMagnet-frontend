// Used in Resume
"use client";
import React, { useState } from "react";

function SkillForm({onSubmit}) {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [skill, setSkill] = useState("");

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const formData = {
      skill,
      level: selectedLevel,
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
              Skill
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Skill"
            className="input bg-base-300"
            name="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Level
            </span>
          </label>
          <select
            value={selectedLevel}
            onChange={handleLevelChange}
            className="select select-bordered bg-base-300"
            name="level"
            required
          >
            <option value="" disabled>
              Select Level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
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

export default SkillForm;
