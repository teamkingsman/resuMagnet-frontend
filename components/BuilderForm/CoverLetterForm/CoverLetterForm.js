"use client";
import { coverLetterFromGetByEmail, coverLetterFromGetById, coverLetterFromPost } from "@/lib/BuilderAPI";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";

function CoverLetterForm({ params }) {
  const router = useRouter();
  const { user } = useAuth();

  const [coverLetterData, setCoverLetterData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await coverLetterFromGetById(params);
        setCoverLetterData(data);
      } catch (error) {
        console.error("Error fetching cover letter data:", error);
      }
    };
    fetchData();
  }, [params]);
  console.log(coverLetterData);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      designation: e.target.designation?.value,
      fname: e.target.fname?.value,
      lname: e.target.lname?.value,
      address: e.target.address?.value,
      email: e.target.email?.value,
      phone: e.target.phone?.value,
      letterBody: e.target.letterBody?.value,
      userEmail: user?.email,
    };

    try {
      const response = await coverLetterFromPost(formData);
      console.log("Cover Letter data sent successfully", response);
      router.push("/dashboard/cover-letter/preview")
    } catch (error) {
      console.error("Error sending Cover Letter data", error);
    }
  };

  return (
    <div className="hero min-h-screen my-16 md:my-0">
      <div className="bg-main p-8 rounded-xl">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-whitecolor">
            Create Your Cover Letter
          </h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="input bg-base-300"
                  name="fname"
                  defaultValue={coverLetterData?.fname}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="input bg-base-300"
                  name="lname"
                  defaultValue={coverLetterData?.lname}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">
                    Designation
                  </span>
                </label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Enter Designation"
                  className="input bg-base-300"
                  defaultValue={coverLetterData?.designation}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">
                    Address
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="input bg-base-300"
                  defaultValue={coverLetterData?.address}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input bg-base-300"
                  name="email"
                  defaultValue={coverLetterData?.email}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-main">
                    Phone
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="input bg-base-300"
                  name="phone"
                  defaultValue={coverLetterData?.phone}
                  required
                />
              </div>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-semibold text-main">
                  Letter Body
                </span>
              </label>
              <textarea
                name="letterBody"
                placeholder="Enter Content"
                className="textarea textarea-bordered textarea-lg w-full bg-base-300"
                defaultValue={coverLetterData?.letterBody}
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:bg-sub_color"
              >
                Preview
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CoverLetterForm;
