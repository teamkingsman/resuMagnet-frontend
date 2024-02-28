"use client";
import Image from "next/image";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineComment,
} from "react-icons/ai";
import { useState } from "react";
import axiosSecure from "@/lib";
import useAuth from "@/hooks/useAuth";

function PostCard({ post, refetch }) {
  const { user } = useAuth();
  const {
    _id,
    text,
    photoURL,
    createdAt,
    likes,
    dislikes,
    authorName,
    authorImage,
    authorEmail,
  } = post;

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };
  const truncatedText = showFullText ? text : text.slice(0, 60);

  const handleLike = async () => {
    try {
      const currentPost = await axiosSecure.get(`/posts/${_id}`);
      const currentLikes = currentPost?.data?.likes || [];
      const currentDislikes = currentPost?.data?.dislikes || [];

      if (currentLikes.includes(user?.email)) {
        await axiosSecure.patch(`/posts/${_id}`, {
          $pull: { likes: user?.email },
        });
      } else if (
        !currentLikes.includes(user?.email) &&
        currentDislikes.includes(user?.email)
      ) {
        await axiosSecure.patch(`/posts/${_id}`, {
          $pull: { dislikes: user?.email },
          $push: { likes: user?.email },
        });
      } else if (
        !currentLikes.includes(user?.email) &&
        !currentDislikes.includes(user?.email)
      ) {
        await axiosSecure.patch(`/posts/${_id}`, {
          $push: { likes: user?.email },
        });
      }
      const updatedPostData = await axiosSecure.get(`/posts/${_id}`);
      console.log(updatedPostData);
      refetch();
      //   setPostData(updatedPostData.data);
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  const handleDislike = async () => {
    try {
      const currentPost = await axiosSecure.get(`/posts/${_id}`);
      const currentLikes = currentPost?.data?.likes || [];
      const currentDislikes = currentPost?.data?.dislikes || [];

      if (currentDislikes.includes(user?.email)) {
        await axiosSecure.patch(`/posts/${_id}`, {
          $pull: { dislikes: user?.email },
        });
      } else if (
        !currentDislikes.includes(user?.email) &&
        currentLikes.includes(user?.email)
      ) {
        await axiosSecure.patch(`/posts/${_id}`, {
          $pull: { likes: user?.email },
          $push: { dislikes: user?.email },
        });
      } else if (
        !currentDislikes.includes(user?.email) &&
        !currentLikes.includes(user?.email)
      ) {
        await axiosSecure.patch(`/posts/${_id}`, {
          $push: { dislikes: user?.email },
        });
      }
      const updatedPostData = await axiosSecure.get(`/posts/${_id}`);
      refetch();
      console.log(updatedPostData);
      //  setPostData(updatedPostData.data);
    } catch (error) {
      console.error("Error handling dislike:", error);
    }
  };

  const isLiked = likes?.includes(user?.email);
  const isDisliked = dislikes?.includes(user?.email);

  return (
    <div className="border-2 border-main rounded-none bg-base-200 w-full">
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-10 rounded-full overflow-hidden transition-all hover:scale-105  hover:shadow-2xl ">
                <Image
                  src={authorImage}
                  alt="Uploaded"
                  width={60}
                  height={60}
                  className="w-full object-cover rounded-none border border-main"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-baseline gap-1">
              <h1 className="text-main font-semibold">{authorName}</h1>
              <h1 className="text-xs font-light text-main">{authorEmail}</h1>
            </div>
            <h1 className="text-xs font-medium text-main">
              {formatDate(createdAt)}
            </h1>
          </div>
        </div>
      </div>
      <div className="px-4 space-y-2">
        <p className="text-left text-base">
          {truncatedText}{" "}
          {text.length > 80 && (
            <button
              onClick={toggleText}
              className="text-base text-main font-extralight cursor-pointer"
            >
              {showFullText ? "...See Less" : "...See More"}
            </button>
          )}
        </p>
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src={photoURL}
            alt="Uploaded"
            width={400}
            height={400}
            className="w-full h-96 lg:h-[620px] object-cover rounded-none border border-main"
          />
        </div>
      </div>
      <div className="bg-cyan-50 w-full flex justify-around gap-2 px-4 my-2">
        <div className="w-1/3 flex items-center border border-cyan-400 justify-center overflow-hidden transition-all   hover:scale-105  hover:shadow-2xl rounded-lg">
          <button
            onClick={handleLike}
            className={`flex items-center  gap-1 text-xs font-bold text-cyan-600 p-1 ${
              isLiked ? "text-green-600" : ""
            }`}
          >
            {likes?.length}
            <AiOutlineArrowUp className="text-xs"></AiOutlineArrowUp>
            {isLiked ? "Liked" : "Like"}
          </button>
        </div>
        <div className="w-1/3 flex items-center border border-cyan-400 justify-center overflow-hidden transition-all   hover:scale-105  hover:shadow-2xl rounded-lg">
          <button
            onClick={handleDislike}
            className={`flex items-center  gap-1 text-xs font-bold text-cyan-600 p-1 ${
              isDisliked ? "text-red-600" : ""
            }`}
          >
            {dislikes?.length}
            <AiOutlineArrowDown className="text-xs"></AiOutlineArrowDown>
            {isDisliked ? "Disliked" : "Dislike"}
          </button>
        </div>
        <div className="w-1/3 flex items-center border border-cyan-400 justify-center overflow-hidden transition-all   hover:scale-105  hover:shadow-2xl rounded-lg">
          <button className="flex items-center  gap-1 text-xs font-bold text-cyan-600 p-1">
            {/* {comments.length} */}
            <AiOutlineComment className="text-blue-600 text-xs"></AiOutlineComment>{" "}
            Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
