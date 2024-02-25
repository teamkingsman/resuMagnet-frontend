"use client";
import React, { useState } from "react";

function SkillForm({ onChange, skills: initialSkills }) {
  const [skills, setSkills] = useState(
    initialSkills
      ? Object.values(initialSkills)
      : [
          {
            id: 1,
            skill: "",
            level: "",
          },
        ]
  );

  const handleSkillChange = (e, id) => {
    const { name, value } = e.target;
    setSkills((prevSkills) =>
      prevSkills.map((s) =>
        s.id === id ? { ...s, [name]: value } : s
      )
    );
  };

  const addMoreSkill = () => {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        id: prevSkills.length + 1,
        skill: "",
        level: "",
      },
    ]);
  };

  // Call onChange with the updated skills state
  const handleOnChange = () => {
    onChange(skills);
  };

  return (
    <div className="md:flex flex-col justify-center gap-4 mt-4">
      {skills?.map((s) => (
        <div key={`skill-${s.id}`}>
          <h1 className="text-center font-extrabold py-2 text-2xl">Skill {s.id}</h1>
          <div className="md:flex justify-between gap-4">
             <div className="form-control flex-1">
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
                value={s.skill}
                onChange={(e) => handleSkillChange(e, s.id)}
                required
              />
            </div>
             <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Level
                </span>
              </label>
              <select
                value={s.level}
                onChange={(e) => handleSkillChange(e, s.id)}
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
        </div>
      ))}

      <div className="form-control mt-4">
        <button
          type="button"
          onClick={() => {
            addMoreSkill();
            handleOnChange();
          }}
          className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border"
        >
          Add More Skill +
        </button>
      </div>
    </div>
  );
}

export default SkillForm;