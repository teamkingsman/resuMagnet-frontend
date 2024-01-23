'use client'

const Contactus = () => {

    const handleContact = (e) => {
        e.preventDefault();
        console.log('contact success');
    }
    return (
        <form onSubmit={handleContact} className="card-body px-4">
            <p className="text-3xl font-bold text-main">Contact Us</p>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                   Email
                </span>
              </label>
              <input
                type="email"
                placeholder="your email"
                name="email"
                className="input bg-base-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  Your message for us
                </span>
              </label>
              <input
                type="textarea"
                placeholder="message"
                name="message"
                className="input bg-base-200 py-3"
                required
              />
            </div>
            <div className="form-control mt-6 ">
              <button
                type="submit"
                className="btn bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"
              >
                Send
              </button>
            </div>
          </form>
    );
};

export default Contactus;