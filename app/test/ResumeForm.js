'use client'
import { useState, useEffect } from 'react';
import DynamicSection from './DynamicSection';
const data ={
    "name": "",
    "email": "",
    "education": [],
    "projects": [],
    "skills": [
        {}
    ],
    "experiences": [
        {
            "degree": "োে্ো্ো্",
            "institute": "োে্ি্েিেো",
            "startDate": "2024-02-05",
            "endDate": "2024-02-28"
        },
        {
            "degree": "োে্ো্ো্",
            "institute": "োে্ি্েিেো",
            "startDate": "2024-02-05",
            "endDate": "2024-02-28"
        },
        {}
    ]
}
// Main ResumeForm Component
function ResumeForm() {
    // State to hold resume data
    const [resumeData, setResumeData] = useState({
        name: '',
        email: '',
        education: [],
        projects: [],
        skills: [],
        experiences: [],
    });
    console.log(resumeData)
useEffect(() => {
    setResumeData(data)
},[])

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(resumeData);
        // Handle form submission, e.g., send data to server or perform further actions
    };

    // Function to handle changes in input fields
    const handleChange = (section, index, field, value) => {
        setResumeData((prevData) => ({
            ...prevData,
            [section]: [
                ...prevData[section].slice(0, index),
                { ...prevData[section][index], [field]: value },
                ...prevData[section].slice(index + 1),
            ],
        }));
    };

    // Function to add a new entry in a resume section
    const handleAddEntry = (section) => {
        console.log(section)
        setResumeData((prevData) => ({
            ...prevData,
            [section]: [...prevData[section], {}],
        }));
    };

    // Fetch data from database and update resumeData state
    // useEffect(() => {
    //     // Fetch data from database and update resumeData state
    //     const fetchData = async () => {
    //         try {
    //             const response = resumeFromGet("");
    //             const data = await response.json();
    //             setResumeData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="md:flex justify-center gap-4">
        <div className="form-control mt-4">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Designation
            </span>
          </label>
          <input
            type="text"
            name="designation"
            placeholder="Enter Designation"
            className="input bg-base-300"
            value={resumeData.designation}
                    onChange={(e) => setResumeData({ ...resumeData, designation: e.target.value })}
            required
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Photo
            </span>
          </label>
          <input
            type="file"
            onChange={(e) => setResumeData({ ...resumeData, photo: e.target.files[0] })}
            className="w-64 file-input file-input-md bg-base-300"
          />
        </div>
      </div>

      <div className="md:flex justify-center gap-4">
        <div className="form-control mt-4">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              First Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="input bg-base-300"
            name="fname"
            value={resumeData.fname}
            onChange={(e) => setResumeData({ ...resumeData, fname: e.target.value })}
            required
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Last Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="input bg-base-300"
            name="lname"
            value={resumeData.lname}
            onChange={(e) => setResumeData({ ...resumeData, lname: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="md:flex justify-center gap-4">
        <div className="form-control mt-4">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Email
            </span>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="input bg-base-300"
            name="email"
            value={resumeData.email}
            onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Phone
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="input bg-base-300"
            name="phone"
            value={resumeData.phone}
            onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
            required
          />
        </div>
      </div>
           
            {/* Repeat similar input fields for other personal information (e.g., email) */}

            {/* Dynamic Sections */}
            <DynamicSection
                sectionData={resumeData.experiences}
                sectionName="experiences"
                handleChange={handleChange}
                handleAddEntry={() => handleAddEntry('experiences')}
            />
            <DynamicSection
                sectionData={resumeData.skills}
                sectionName="skills"
                handleChange={handleChange}
                handleAddEntry={() => handleAddEntry('skills')}
            />
            {/* Repeat similar components for projects, skills, and experiences */}

            <button type="submit">Submit</button>
        </form>
    );
}


export default ResumeForm;
