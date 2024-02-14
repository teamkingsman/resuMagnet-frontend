"use client";
import { deleteImageFromUrl, photoLink } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import avatar from "@/assets/avatar.gif";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

function BasicInfoForm({ onChange, basicInfo }) {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [dob, setDob] = useState(null);
  
  const handleToggleClick = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };
const handelPhotoFileUp = async (e) => {
  const photoURL = await photoLink(e.target.files[0]);
  setPhotoUrl(photoURL);
};

const handelPhotoFileDel = async () => {
  console.log(photoUrl)
    const res = await deleteImageFromUrl(photoUrl)
    if(res?.result=='ok'){
      setPhotoUrl(null)
    }
    console.log(res)
  }
  const [isOpen, setIsOpen] = useState(true);
  const handelCropModal= () =>{
    setIsOpen(!isOpen)
  }
  const handleInputChange = async (e) => {

    const formData = {
      designation: e.target.form.designation.value,
      photoURL: photoUrl,
      fname: e.target.form.fname.value,
      lname: e.target.form.lname.value,
      email: e.target.form.email.value,
      phone: e.target.form.phone.value,
      ...(showAdditionalFields && {
        country: e.target.form.country.value,
        city: e.target.form.city.value,
        street: e.target.form.street.value,
        postal: e.target.form.postal.value,
        dob: showAdditionalFields ? dob : null,
        nationality: e.target.form.nationality.value,
        about: e.target.form.about.value,
      }),
    };

    onChange(formData);
  };

  return (
    <>
    <form className="card-body">
     <div className=" mx-auto">
        <div className="avatar">
          <div className="w-24 rounded">
            <Image alt="user" width={400} height={400} src={photoUrl ? photoUrl : avatar} />
          </div>
        </div>
           <div className="flex justify-center mx-auto">
           <FaRegEdit onClick={handelCropModal} className="text-main" />

            <AiOutlineDelete onClick={handelPhotoFileDel} className="text-main" />
           </div>

     </div>


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
            onChange={handleInputChange}
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
            onChange={handelPhotoFileUp}
            className="w-64 file-input file-input-md bg-base-300"
          />
        </div>
      </div>

      <div className="md:flex justify-between gap-4">
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="md:flex justify-between gap-4">
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>
      </div>

        {!showAdditionalFields && (
          <div className="form-control mt-4">
            <button
              type="button"
              className="flex items-center justify-between gap-2 text-main font-semibold hover:font-bold hover:bg hover:border "
              onClick={handleToggleClick}
            >
              Add More Information +
            </button>
          </div>
        )}

      {showAdditionalFields && (
        <>
          <div className="md:flex justify-between gap-4">
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-4">
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-4">
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
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Date Of Birth
                </span>
              </label>
              <input
                type="date"
                placeholder="Select Date of Birth"
                className="input bg-base-300"
                name="dob"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>

          <div className="form-control flex justify-between gap-4 mt-8">
            <label className="label">
              <span className="label-text font-semibold text-main">About</span>
            </label>
            <textarea
              name="about"
              placeholder="About Your self"
              className="textarea textarea-bordered textarea-lg w-full bg-base-300"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-control mt-4">
            <button
              type="button"
              className="flex items-center justify-between gap-2 text-main font-semibold hover:font-bold hover:bg hover:border "
              onClick={handleToggleClick}
            >
              Add Less Information -
            </button>
          </div>
        </>
      
      )}
    </form>
      </>
  );
}

export default BasicInfoForm;
