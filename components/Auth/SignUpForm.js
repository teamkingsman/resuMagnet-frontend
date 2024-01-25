'use client'
import useAuth from "@/hooks/useAuth";
import { saveUser } from "@/lib/auth";
import { photoLink } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineLock,
  MdOutlineMail,
  MdOutlinePhoto,
} from "react-icons/md";
import { toast } from "sonner";


function SignUpForm() {
  const router = useRouter()
  const [signUpError, setSignUpError] = useState("");
  const [success, setSuccess] = useState("");
  const [photo, setPhoto] = useState(null);
  const { signUpUser, handleUpdateProfile } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    // const photo = form.photo.value[0];
    console.log(photo);
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setSignUpError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setSignUpError("Password should be at least 6 characters.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setSignUpError("Required at least one uppercase character.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setSignUpError("Required at least one lowercase character.");
      return;
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
      setSignUpError("Required at least one special character.");
    } else if (!/[0-9]/.test(password)) {
      setSignUpError("Required at least one numerical character.");
      return;
    }

    setSignUpError("");
    const toastId = toast.loading('Creating user ...');
     const photoURL = await photoLink(photo);
     if(photoURL){

       const data = { displayName, email, password, photoURL };
       try{
      
        await saveUser(data);
        await signUpUser(email, password);
        await handleUpdateProfile(displayName, photoURL)
        .then(() => {
  
          toast.success('User Created', (toastId));
  
          setSuccess("User created successfully.");
          router.back()
        })
      }
      catch(error){
        console.log(error)
        toast.error(error.message, (toastId));
      }
     }
  };

  return (
    <form onSubmit={handleSignUp} className="card-body">
      <p className="text-3xl font-bold text-main">Sign Up</p>
      <div className="form-control">
        <label className="label">
          <span className="flex items-center gap-2 label-text font-semibold text-main">
            <MdOutlineDriveFileRenameOutline></MdOutlineDriveFileRenameOutline>
            Your Name
          </span>
        </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="input bg-base-200"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="flex items-center gap-2 label-text font-semibold text-main">
            <MdOutlinePhoto></MdOutlinePhoto> Your Photo
          </span>
        </label>
        <input
        onChange={(e) => setPhoto(e.target.files[0])}
          type="file"
          className="file-input  bg-base-200 file-input-md w-full max-w-xs"
          name="photo"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="flex items-center gap-2 label-text font-semibold text-main">
            <MdOutlineMail></MdOutlineMail>Your Email
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
            <MdOutlineLock></MdOutlineLock>Create Password
          </span>
        </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          className="input bg-base-200"
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="flex items-center gap-2 label-text font-semibold text-main">
            <MdOutlineLock></MdOutlineLock> Confirm Password
          </span>
        </label>
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          className="input bg-base-200"
          required
        />
      </div>

      <div className="form-control mt-6 ">
        <button
          type="submit"
          className="btn bg-main text-neutral-50 font-bold overflow-hidden transition-all hover:scale-105  hover:shadow-2xl hover:bg-sub_color"
        >
          Sign Up
        </button>
        {signUpError && (
          <p className="text-xs text-center text-red-600 p-4">{signUpError}</p>
        )}
        {success && (
          <p className="text-xs text-center text-green-600 p-4">{success}</p>
        )}
      </div>
    </form>
  );
}

export default SignUpForm;
