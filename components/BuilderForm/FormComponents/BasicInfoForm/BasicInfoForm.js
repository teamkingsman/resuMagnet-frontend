// Used in Resume
"use client";
import { photoLink } from "@/lib/utils";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BasicInfoForm({ onSubmit }) {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [photo, setPhoto] = useState(null);
  const handleToggleClick = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };
  const [dob, setDob] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const photoURL = await photoLink(photo);
    const formData = {
      designation: e.target.designation?.value, 
      photoURL: photoURL,
      fname: e.target.fname?.value,
      lname: e.target.lname?.value,
      email: e.target.email?.value,
      phone: e.target.phone?.value,
      ...(showAdditionalFields && {
        country: e.target.country?.value,
        city: e.target.city?.value,
        street: e.target.street?.value,
        postal: e.target.postal?.value,
        dob: showAdditionalFields
          ? dob
            ? dob.toISOString().split("T")[0]
            : null
          : null,
        nationality: e.target.nationality?.value,
        about: e.target.about?.value,
      }),
    };
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleFormSubmit} className="card-body">
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
            onChange={(e) => setPhoto(e.target.files[0])}
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
            required
          />
        </div>
      </div>

      {!showAdditionalFields && (
        <div className="form-control mt-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border "
            onClick={handleToggleClick}
          >
            Add More Information +
          </button>
        </div>
      )}

      {showAdditionalFields && (
        <>
          <div className="md:flex justify-center gap-4">
            <div className="form-control mt-4">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Country
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Country"
                className="input bg-base-300"
                name="country"
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  City
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter City"
                className="input bg-base-300"
                name="city"
              />
            </div>
          </div>

          <div className="md:flex justify-center gap-4">
            <div className="form-control mt-4">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Street
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Street"
                className="input bg-base-300"
                name="street"
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Postal Code
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Postal Code"
                className="input bg-base-300"
                name="postal"
              />
            </div>
          </div>

          <div className="md:flex justify-center gap-4">
            <div className="form-control mt-4">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Date Of Birth
                </span>
              </label>
              <DatePicker
                selected={dob}
                onChange={(date) => setDob(date)}
                placeholderText="Select Date of Birth"
                className="input bg-base-300"
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Nationality
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Nationality"
                className="input bg-base-300"
                name="nationality"
              />
            </div>
          </div>

          <div className="form-control flex justify-center gap-4 mt-8">
            <label className="label">
              <span className="label-text font-semibold text-main">About</span>
            </label>
            <textarea
              placeholder="About Your self"
              className="textarea textarea-bordered textarea-lg w-full bg-base-300"
            ></textarea>
          </div>
          <div className="form-control mt-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 text-main font-semibold hover:font-bold hover:bg hover:border "
              onClick={handleToggleClick}
            >
              Add Less Information -
            </button>
          </div>
        </>
      )}

      <div className="form-control mt-6">
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

export default BasicInfoForm;
