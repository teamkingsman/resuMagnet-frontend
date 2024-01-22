'use client'
import { AuthContext } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { MdOutlineLock, MdOutlineMail } from 'react-icons/md';

function SignInForm () {
    const [signInError, setSignInError] = useState("");
  const [success, setSuccess] = useState("");
  const {signInUser} = useContext(AuthContext);
  const router = useRouter();
console.log(router)
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        setSuccess("User logged in successfully.");
        const signedInUser = result.user;
        console.log(signedInUser);
      })
      .catch((error) => {
        console.error(error);
        setSignInError(error.message);
      });
  };
  return (
    <form onSubmit={handleSignIn} className="card-body">
            <p className="text-3xl font-bold text-main">Sign In</p>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  <MdOutlineMail></MdOutlineMail> Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input bg-base-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="flex items-center gap-2 label-text font-semibold text-main">
                  <MdOutlineLock></MdOutlineLock> Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input bg-base-200"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt hover:underline hover:font-semibold text-main"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 ">
              <button
                type="submit"
                className="btn bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"
              >
                Sign In
              </button>
              {signInError && (
                <p className="text-sm text-center text-red-600 p-4">
                  {signInError}
                </p>
              )}
              {success && (
                <p className="text-sm text-center text-green-600">{success}</p>
              )}
            </div>
          </form>
  )
}

export default SignInForm