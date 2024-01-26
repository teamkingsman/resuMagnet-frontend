// Used in Resume
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EmploymentForm({ onSubmit }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date, field = "start") => {
    if (field === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const employer = form.employer.value;
    const startDateValue = startDate ? startDate.toISOString().split('T')[0] : null;
    const endDateValue = endDate ? endDate.toISOString().split('T')[0] : null;
    const jobDescription = form.jobDescription.value;

    const formData = {
      jobTitle,
      employer,
      startDate: startDateValue,
      endDate: endDateValue,
      jobDescription,
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
              Job Title
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Job Title"
            className="input bg-base-300"
            name="jobTitle"
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
            name="employer"
            required
          />
        </div>
      </div>

      <div className="md:flex justify-center gap-4">
        <div className="form-control">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Start Date
            </span>
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => handleDateChange(date, "start")}
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
            selected={endDate}
            onChange={(date) => handleDateChange(date, "end")}
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
          name="jobDescription"
        />
      </div>

      <div className="form-control mt-4">
        <button
          type="submit"
          className="btn-sm bg-sub_color text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-highlight_color"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default EmploymentForm;
