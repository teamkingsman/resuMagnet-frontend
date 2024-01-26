"use client"
function CoverLetterForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      designation: e.target.designation?.value,
      fname: e.target.fname?.value,
      lname: e.target.lname?.value,
      email: e.target.email?.value,
      phone: e.target.phone?.value,
      letterBody: e.target.letterBody?.value,
    };

    console.log("Form Data:", formData);

  };
  return (
    <div className="hero min-h-screen bg-main">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-main">
            Create Your Own Cover Letter
          </h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
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
                    Address
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="input bg-base-300"
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
            <div className="form-control flex justify-center gap-4 mt-8">
              <label className="label">
                <span className="label-text font-semibold text-main">
                  Letter Body
                </span>
              </label>
              <textarea
                placeholder="Enter Content"
                className="textarea textarea-bordered textarea-lg w-full bg-base-300"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn-sm bg-sub_color text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-highlight_color"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CoverLetterForm;
