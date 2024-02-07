"use client";
import React, {  useState } from "react";

function ProjectForm({ onChange, projects: initialProjects }) {
  const [projects, setProjects] = useState(initialProjects);

  const handleProjectChange = (e, id) => {
    const { name, value } = e.target;
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, [name]: value } : project
      )
    );
    onChange(projects);
  };

  const addMoreProject = () => {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        id: prevProjects.length + 1,
        title: "",
        type: "",
        liveLink: "",
        description: "",
        githubLink: "",
      },
    ]);
    onChange(projects);
  };

  return (
    <div className="md:flex flex-col justify-center gap-4 mt-4">
      {projects.map((project) => (
        <div key={project.id}>
          <h1 className="text-center font-extrabold py-2 text-2xl">
            Project {project.id}
          </h1>
          <div className="md:flex justify-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Title"
                className="input bg-base-300"
                name="title"
                value={project.title}
                onChange={(e) => handleProjectChange(e, project.id)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Type
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Type"
                className="input bg-base-300"
                name="type"
                value={project.type}
                onChange={(e) => handleProjectChange(e, project.id)}
                required
              />
            </div>
          </div>
          <div className="md:flex justify-center gap-4">
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Live Link or Media Link
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Live Link or Media Link"
                className="input bg-base-300"
                name="liveLink"
                value={project.liveLink}
                onChange={(e) => handleProjectChange(e, project.id)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  GitHub Repository Link
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter GitHub Repository Link"
                className="input bg-base-300"
                name="githubLink"
                value={project.githubLink}
                onChange={(e) => handleProjectChange(e, project.id)}
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
              name="description"
              value={project.description}
              onChange={(e) => handleProjectChange(e, project.id)}
              required
            />
          </div>
        </div>
      ))}

      <div className="form-control mt-4">
        <button
          type="button"
          onClick={addMoreProject}
          className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border"
        >
          Add More Project +
        </button>
      </div>
    </div>
  );
}

export default ProjectForm;
