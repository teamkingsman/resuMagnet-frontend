"use client";
import React, { useState } from "react";
import { deleteImageFromUrl, photoLink } from "@/lib/utils";
import Image from "next/image";
import avatar from "@/assets/avatar.gif";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import CropImage from "@/components/Modal/CropImage";

function BasicInfoForm({ onChange, basicInfo }) {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(basicInfo?.photoURL || avatar);
  const [formData, setFormData] = useState();

  const handleToggleClick = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };

  const handelPhotoFileUp = async (e) => {
    const newPhotoURL = await photoLink(e.target.files[0]);
    setPhotoUrl(newPhotoURL);
    setFormData((prevData) => ({ ...prevData, photoURL: newPhotoURL }));
    onChange({ ...formData, photoURL: newPhotoURL });
  };

  const handelPhotoFileDel = async () => {
    const res = await deleteImageFromUrl(photoUrl);
    if (res?.result === "ok") {
      setPhotoUrl(avatar);
      setFormData((prevData) => ({ ...prevData, photoURL: avatar }));
      onChange({ ...formData, photoURL: avatar });
    }
  };

  const handelCropModal = () => {};

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
    onChange({ ...formData, [fieldName]: fieldValue });
  };

  return (
    <div className="card-body">
      <div className="mx-auto">
        <div className="avatar">
          <div className="w-24 rounded">
            <Image
              alt="user"
              width={400}
              height={400}
              src={photoUrl || basicInfo?.photoURL || avatar}
            />
          </div>
        </div>
        <div className="flex justify-center mx-auto">
          <FaRegEdit onClick={handelCropModal} className="text-main" />
          <AiOutlineDelete
            onClick={handelPhotoFileDel}
            className="text-main"
          />
        </div>
      </div>

      <div className="md:flex justify-center gap-4">
        <div className="form-control   flex-1">
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
            defaultValue={basicInfo?.designation || ""}
          />
        </div>

        <div className="form-control   flex-1">
          <label className="label">
            <span className="flex items-center gap-2 label-text font-semibold text-main">
              Photo
            </span>
          </label>
          <input
            type="file"
            onChange={handelPhotoFileUp}
            className="w-full file-input file-input-md bg-base-300"
          />
        </div>
      </div>

      <div className="md:flex justify-between gap-4">
        <div className="form-control   flex-1">
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
            defaultValue={basicInfo?.fname || ""}
          />
        </div>

        <div className="form-control   flex-1">
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
            defaultValue={basicInfo?.lname || ""}
          />
        </div>
      </div>

      <div className="md:flex justify-between gap-4">
        <div className="form-control   flex-1">
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
            defaultValue={basicInfo?.email || ""}
          />
        </div>

        <div className="form-control   flex-1">
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
            defaultValue={basicInfo?.phone || ""}
          />
        </div>
      </div>

      {!showAdditionalFields && (
        <div className="form-control  flex-1">
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
            <div className="form-control   flex-1">
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
                defaultValue={basicInfo?.country || ""}
              />
            </div>

            <div className="form-control   flex-1">
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
                defaultValue={basicInfo?.city || ""}
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-4">
            <div className="form-control   flex-1">
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
                defaultValue={basicInfo?.street || ""}
              />
            </div>

            <div className="form-control   flex-1">
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
                defaultValue={basicInfo?.postal || ""}
              />
            </div>
          </div>

          <div className="md:flex justify-between gap-4">
            <div className="form-control   flex-1">
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
                defaultValue={basicInfo?.nationality || ""}
              />
            </div>

            <div className="form-control   flex-1">
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
                onChange={handleInputChange}
                defaultValue={basicInfo?.dob || ""}
              />
            </div>
          </div>

          <div className="form-control flex justify-between">
            <label className="label">
              <span className="label-text font-semibold text-main">
                About
              </span>
            </label>
            <textarea
              name="about"
              placeholder="About Yourself"
              className="textarea textarea-bordered textarea-lg w-full bg-base-300"
              onChange={handleInputChange}
              defaultValue={basicInfo?.about || ""}
            ></textarea>
          </div>

          <div className="form-control  ">
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
    </div>
  );
}

export default BasicInfoForm;
