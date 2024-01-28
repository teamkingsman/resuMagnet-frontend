
import { useForm, ValidationError } from '@formspree/react';

const Subscribe = () => {
    const [state, handleSubmit] = useForm("xleqgpdo");
    if (state.succeeded) {
        return <p className='text-2xl lg:text-3xl font-extrabold px-3 text-center text-main'>Thanks for joining!</p>;
    }
    return (
        <div>
            <form className="hidden md:block" onSubmit={handleSubmit}>
                <header className="footer-title text-highlight_color">Newsletter</header>
                <fieldset className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-main">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input id="email"
                            type="email"
                            name="email"
                            placeholder="username@site.com"
                            className="input input-bordered bg-[#FFFFFF] border-2 border-main join-item  w-full" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting} className="btn bg-main text-[#FFFFFF] join-item hover:text-highlight_color">Subscribe</button>
                    </div>
                </fieldset>
            </form>

        </div>
    );
};

export default Subscribe;