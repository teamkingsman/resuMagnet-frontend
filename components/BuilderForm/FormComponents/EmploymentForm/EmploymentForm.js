// EmploymentForm component
"use client";
import React, { useState } from "react";

function EmploymentForm({ onChange, employment: initialEmploymentData }) {
  const [employmentHistory, setEmploymentHistory] = useState(
    initialEmploymentData
      ? Object.values(initialEmploymentData)
      : [
          {
            id: 1,
            jobTitle: "",
            employer: "",
            startDate: "",
            endDate: "",
            jobDescription: "",
          },
        ]
  );

  const handleInputChange = (e, field, id) => {
    setEmploymentHistory((prevHistory) =>
      prevHistory.map((entry) =>
        entry.id === id ? { ...entry, [field]: e.target.value } : entry
      )
    );
    onChange(employmentHistory);
  };



  return (
    <div className="md:flex flex-col justify-center gap-4 mt-4">
      {employmentHistory?.map((entry) => (
        <div key={entry.id}>
          <h1 className="text-center font-extrabold py-2 text-2xl">
            Employment History {entry.id}
          </h1>
          <div className="md:flex justify-between gap-4">
             <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Job Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Job Title"
                className="input bg-base-300"
                name={`jobTitle-${entry.id}`}
                value={entry.jobTitle}
                onChange={(e) => handleInputChange(e, "jobTitle", entry.id)}
                required
              />
            </div>
             <div className="form-control flex-1">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Employer
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Employer"
                className="input bg-base-300"
                name={`employer-${entry.id}`}
                value={entry.employer}
                onChange={(e) => handleInputChange(e, "employer", entry.id)}
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
                onChange={(e) => handleInputChange(e, "startDate", entry.id)}
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
                onChange={(e) => handleInputChange(e, "endDate", entry.id)}
              />
            </div>
          </div>

           <div className="form-control flex-1">
            <label className="label">
              <span className="flex items-center gap-2 label-text font-semibold text-main">
                Description
              </span>
            </label>
            <textarea
              placeholder="Enter Job Description"
              className="textarea bg-base-300"
              name={`jobDescription-${entry.id}`}
              value={entry.jobDescription}
              onChange={(e) => handleInputChange(e, "jobDescription", entry.id)}
            />
          </div>
        </div>
      ))}
      <div className="form-control mt-4">
        <button
          type="button"
          onClick={() =>
            setEmploymentHistory([
              ...employmentHistory,
              {
                id: employmentHistory.length + 1,
                jobTitle: "",
                employer: "",
                startDate: " ",
                endDate: " ",
                jobDescription: "",
              },
            ])
          }
          className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border "
        >
          Add More History +
        </button>
      </div>
    </div>
  );
}

export default EmploymentForm;
