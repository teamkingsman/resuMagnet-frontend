"use client";
import Image from "next/image";
import { photoLink } from "@/lib/utils";
import { useState } from "react";
import { MdAddPhotoAlternate, MdOutlineSend } from "react-icons/md";
import useAuth from "@/hooks/useAuth";
import axiosSecure from "@/lib";
import { toast } from "sonner";

function CreatePost() {
  const [uploadedPhotoURL, setUploadedPhotoURL] = useState();
  const { user } = useAuth();
  const handlePhotoChange = async (e) => {
    try {
      const photoURL = await photoLink(e.target.files[0]);
      setUploadedPhotoURL(photoURL);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const postText = form.postText.value;
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      const postData = {
        text: postText,
        photoURL: uploadedPhotoURL,
        createdAt: formattedDate,
        likes: [],
        dislikes: [],
        authorName: user?.displayName,
        authorImage: user?.photoURL,
        authorEmail: user?.email,
      };
      const postRes = await axiosSecure.post("/posts", postData);
      if (postRes.data.insertedId) {
        toast.success("Post Created Successfully");
        console.log(postRes);
        form.reset();
        window.location.reload();
      } else {
        toast.error("Failed To Create Post");
      }
    } catch (error) {
      console.log(error.message);
    } 
  };
  return (
    <div>
      <form
        className="w-full flex flex-col md:px-8"
        onSubmit={handleCreatePost}
      >
        <div className="form-control border border-main border-b-0">
          <textarea
            placeholder="Type your post here..."
            type="text"
            name="postText"
            className="input h-48 w-full rounded-none bg-base-200 textarea-lg"
            required
          />
        </div>
        <div className="form-control">
          {uploadedPhotoURL ? (
            <Image
              src={uploadedPhotoURL}
              alt="Uploaded"
              width={100}
              height={60}
              className="w-full object-cover rounded-none border border-main"
            />
          ) : (
            <label className="file-input-sm w-full rounded-none border border-main flex items-center justify-center gap-4 overflow-hidden transition-all hover:scale-105 hover:shadow-2xl font-bold bg-base-300">
              <div className="flex flex-1 gap-2 items-center justify-center">
                Add Photo <MdAddPhotoAlternate />
              </div>
              <input
                className="flex-1"
                type="file"
                onChange={handlePhotoChange}
              />
            </label>
          )}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center btn btn-sm bg-main border border-main text-neutral-50 font-bold w-full rounded-none overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:bg-sub_color"
        >
          Create Post <MdOutlineSend />
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
