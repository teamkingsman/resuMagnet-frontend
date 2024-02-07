"use client"
import React, { useState } from "react";

function ExtraActivitiesForm({ onChange }) {
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleInputChange = (e, field, id) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, [field]: e.target.value } : activity
      )
    );
    onChange([...activities]);
  };

  const handleDateChange = (date, field, id) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, [field]: date } : activity
      )
    );
    onChange([...activities]);
  };

  const addMoreActivity = () => {
    setActivities((prevActivities) => [
      ...prevActivities,
      {
        id: prevActivities.length + 1,
        name: "",
        organization: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
    onChange([...activities]);
  };

  return (
    <div className="md:flex flex-col justify-center gap-4 mt-4">
      {activities.map((activity) => (
        <div key={activity.id}>
          <h1 className="text-center font-extrabold py-2 text-2xl">
            Extracurricular Activity {activity.id}
          </h1>
          <div className="md:flex justify-between gap-4">
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Activity Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Activity Name"
                className="input bg-base-300"
                name={`activityName-${activity.id}`}
                value={activity.name}
                onChange={(e) => handleInputChange(e, "name", activity.id)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Organization
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Organization"
                className="input bg-base-300"
                name={`organization-${activity.id}`}
                value={activity.organization}
                onChange={(e) =>
                  handleInputChange(e, "organization", activity.id)
                }
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
              <input
                type="date"
                placeholder="Select Start Date"
                className="input bg-base-300"
                name={`startDate-${activity.id}`}
                value={activity.startDate}
                onChange={(e) =>
                  handleDateChange(e.target.value, "startDate", activity.id)
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  End Date
                </span>
              </label>
              <input
                type="date"
                placeholder="Select End Date"
                className="input bg-base-300"
                name={`endDate-${activity.id}`}
                value={activity.endDate}
                onChange={(e) =>
                  handleDateChange(e.target.value, "endDate", activity.id)
                }
                required
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
              placeholder="Enter Description"
              className="textarea textarea-bordered bg-base-300"
              name={`description-${activity.id}`}
              value={activity.description}
              onChange={(e) =>
                handleInputChange(e, "description", activity.id)
              }
            />
          </div>
        </div>
      ))}

      <div className="form-control mt-4">
        <button
          type="button"
          onClick={addMoreActivity}
          className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border"
        >
          Add More Activity +
        </button>
      </div>
    </div>
  );
}

export default ExtraActivitiesForm;
