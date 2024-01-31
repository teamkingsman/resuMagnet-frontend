// Used in Resume
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EducationForm({ onSubmit }) {
  const [educationHistory, setEducationHistory] = useState([
    {
      id: 1,
      degree: "",
      institute: "",
      startDate: null,
      endDate: null,
      ongoing: false,
      jobDescription: "",
    },
  ]);

  const handleDateChange = (date, field, id) => {
    setEducationHistory((prevHistory) =>
      prevHistory.map((entry) =>
        entry.id === id ? { ...entry, [field]: date } : entry
      )
    );
  };

  const handleCheckboxChange = (e, id) => {
    const { checked } = e.target;
    setEducationHistory((prevHistory) =>
      prevHistory.map((entry) =>
        entry.id === id
          ? {
              ...entry,
              ongoing: checked,
              endDate: checked ? null : entry.endDate,
            }
          : entry
      )
    );
  };

  const handleInputChange = (e, field, id) => {
    setEducationHistory((prevHistory) =>
      prevHistory.map((entry) =>
        entry.id === id ? { ...entry, [field]: e.target.value } : entry
      )
    );
  };

  const handleForm = (e) => {
    e.preventDefault();
    const formData = educationHistory.map((entry) => ({
      degree: entry.degree,
      institute: entry.institute,
      startDate: entry.startDate
        ? entry.startDate.toISOString().split("T")[0]
        : null,
      endDate: entry.ongoing
        ? null
        : entry.endDate
        ? entry.endDate.toISOString().split("T")[0]
        : null,
      jobDescription: entry.jobDescription,
    }));
    onSubmit(formData);
  };

  const addMoreHistory = () => {
    setEducationHistory((prevHistory) => [
      ...prevHistory,
      {
        id: prevHistory.length + 1,
        degree: "",
        institute: "",
        startDate: null,
        endDate: null,
        ongoing: false,
        jobDescription: "",
      },
    ]);
  };

  return (
    <form
      onSubmit={handleForm}
      className="md:flex flex-col justify-center gap-4 mt-4"
    >
      {educationHistory.map((entry) => (
        <div key={entry.id}>
          <h1 className="text-center font-extrabold py-2 text-2xl">Education History {entry.id}</h1>
          <div className="md:flex justify-between gap-4">
            <div className="form-control">
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
            <div className="form-control">
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
                onChange={(date) => handleDateChange(date, "endDate", entry.id)}
                placeholderText="Select End Date"
                className="input bg-base-300"
                dateFormat="dd-MM-yyyy"
                disabled={entry.ongoing}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="flex gap-2 label-text font-semibold text-main">
                  Description
                </span>
              </label>
              <textarea
                placeholder="Enter Job Description"
                className="textarea textarea-lg textarea-bordered bg-base-300"
                name={`jobDescription-${entry.id}`}
                value={entry.jobDescription}
                onChange={(e) =>
                  handleInputChange(e, "jobDescription", entry.id)
                }
              />
            </div>
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

export default EducationForm;
