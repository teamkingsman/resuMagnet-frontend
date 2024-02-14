"use client";
import React, { useState } from "react";

function EducationForm({ onChange, education: initialEducationData }) {
  const [educationHistory, setEducationHistory] = useState(
    initialEducationData
      ? Object.values(initialEducationData)
      : [
          {
            id: 1,
            degree: "",
            institute: "",
            startDate: "",
            endDate: "",
            ongoing: false,
            educationDescription: "",
          },
        ]
  );

  const handleDateChange = (e, field, id) => {
    setEducationHistory((prevHistory) => {
      const updatedHistory = prevHistory.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              [field]: e.target.value || "",
            }
          : entry
      );
      onChange([...updatedHistory]);
      return updatedHistory;
    });
  };

  const handleCheckboxChange = (e, id) => {
    const { checked } = e.target;
    setEducationHistory((prevHistory) => {
      const updatedHistory = prevHistory.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              ongoing: checked,
              endDate: checked ? " " : entry.endDate,
            }
          : entry
      );
      onChange([...updatedHistory]);
      return updatedHistory;
    });
  };

  const handleInputChange = (e, field, id) => {
    setEducationHistory((prevHistory) => {
      const updatedHistory = prevHistory.map((entry) =>
        entry.id === id ? { ...entry, [field]: e.target.value } : entry
      );
      onChange([...updatedHistory]);
      return updatedHistory;
    });
  };

  return (
    <div className="md:flex flex-col justify-center gap-4 mt-4">
      {educationHistory.map((entry) => (
        <div key={entry.id}>
          <h1 className="text-center font-extrabold py-2 text-2xl">
            Education History {entry.id}
          </h1>
          <div className="md:flex justify-between gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Degree
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Degree"
                className="input bg-base-300"
                name={`degree-${entry.id}`}
                value={entry.degree}
                onChange={(e) => handleInputChange(e, "degree", entry.id)}
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Institute
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Institute"
                className="input bg-base-300"
                name={`institute-${entry.id}`}
                value={entry.institute}
                onChange={(e) => handleInputChange(e, "institute", entry.id)}
                required
              />
            </div>
          </div>
          <div className="md:flex justify-between gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Start Date
                </span>
              </label>
              <input
                type="date"
                placeholder="Select Start Date"
                className="input bg-base-300"
                name={`startDate-${entry.id}`}
                value={entry.startDate}
                onChange={(e) => handleDateChange(e, "startDate", entry.id)}
              />
            </div>

            <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  End Date
                </span>
              </label>
              <input
                type="date"
                placeholder="Select End Date"
                className="input bg-base-300"
                name={`endDate-${entry.id}`}
                value={entry.endDate}
                onChange={(e) => handleDateChange(e, "endDate", entry.id)}
                disabled={entry.ongoing}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="form-control flex-1">
              <div className="flex items-center">
                <label className="label">
                  <span className="flex gap-2 label-text font-semibold text-main">
                    Ongoing
                  </span>
                </label>
                <input
                  type="checkbox"
                  checked={entry.ongoing}
                  onChange={(e) => handleCheckboxChange(e, entry.id)}
                />
              </div>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="flex gap-2 label-text font-semibold text-main">
                  Description
                </span>
              </label>
              <textarea
                placeholder="Enter Education Description"
                className="textarea bg-base-300"
                name={`educationDescription-${entry.id}`}
                value={entry.educationDescription}
                onChange={(e) =>
                  handleInputChange(e, "educationDescription", entry.id)
                }
              />
            </div>
          </div>
        </div>
      ))}

      <div className="form-control mt-4">
        <button
          type="button"
          onClick={() =>
            setEducationHistory((prevHistory) => [
              ...prevHistory,
              {
                id: prevHistory.length + 1,
                degree: "",
                institute: "",
                startDate: " ",
                endDate: " ",
                ongoing: false,
                educationDescription: "",
              },
            ])
          }
          className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border"
        >
          Add More History +
        </button>
      </div>
    </div>
  );
}

export default EducationForm;
