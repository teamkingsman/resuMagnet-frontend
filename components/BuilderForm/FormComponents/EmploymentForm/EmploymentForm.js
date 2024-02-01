// Used in Resume
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EmploymentForm({ onSubmit }) {
  const [employmentHistory, setEmploymentHistory] = useState([
    {
      id: 1,
      jobTitle: "",
      employer: "",
      startDate: null,
      endDate: null,
      jobDescription: "",
    },
  ]);

  const handleDateChange = (date, field, id) => {
    setEmploymentHistory((prevHistory) =>
      prevHistory.map((entry) =>
        entry.id === id ? { ...entry, [field]: date } : entry
      )
    );
  };

  const handleInputChange = (e, field, id) => {
    setEmploymentHistory((prevHistory) =>
      prevHistory.map((entry) =>
        entry.id === id ? { ...entry, [field]: e.target.value } : entry
      )
    );
  };

  const handleForm = (e) => {
    e.preventDefault();
    const formData = employmentHistory.map((entry) => ({
      jobTitle: entry.jobTitle,
      employer: entry.employer,
      startDate: entry.startDate
        ? entry.startDate.toISOString().split("T")[0]
        : null,
      endDate: entry.endDate
        ? entry.endDate.toISOString().split("T")[0]
        : null,
      jobDescription: entry.jobDescription,
    }));
    onSubmit(formData);
  };

  const addMoreHistory = () => {
    setEmploymentHistory((prevHistory) => [
      ...prevHistory,
      {
        id: prevHistory.length + 1,
        jobTitle: "",
        employer: "",
        startDate: null,
        endDate: null,
        jobDescription: "",
      },
    ]);
  };

  return (
    <form
      onSubmit={handleForm}
      className="md:flex flex-col justify-center gap-4 mt-4"
    >
      {employmentHistory.map((entry) => (
        <div key={entry.id}>
          <h1 className="text-center font-extrabold py-2 text-2xl">Employment History {entry.id}</h1>
          <div className="md:flex justify-between gap-4">
            <div className="form-control">
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
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Start Date
                </span>
              </label>
              <DatePicker
                selected={entry.startDate}
                onChange={(date) =>
                  handleDateChange(date, "startDate", entry.id)
                }
                showTimeSelect={false}
                required
                placeholderText="Select Start Date"
                className="input bg-base-300"
                dateFormat="dd-MM-yyyy"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  End Date
                </span>
              </label>
              <DatePicker
                selected={entry.endDate}
                onChange={(date) =>
                  handleDateChange(date, "endDate", entry.id)
                }
                showTimeSelect={false}
                required
                placeholderText="Select End Date"
                className="input bg-base-300"
                dateFormat="dd-MM-yyyy"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="flex items-center gap-2 label-text font-semibold text-main">
                Description
              </span>
            </label>
            <textarea
              placeholder="Enter Job Description"
              className="textarea textarea-bordered bg-base-300"
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
          onClick={addMoreHistory}
          className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border "
        >
          Add More History +
        </button>
      </div>
      <div className="form-control mt-4">
        <button
          type="submit"
          className="btn-sm bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default EmploymentForm;
