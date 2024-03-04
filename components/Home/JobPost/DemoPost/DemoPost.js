"use client";
import axiosSecure from "@/lib";
import PostCard from "../PostCard/PostCard";
import { useQuery } from "@tanstack/react-query";
function DemoPost() {
  const { data: allPost = [], refetch } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => {
      const res = await axiosSecure.get("/posts");
      return res.data;
    },
  });
  const twoPosts = allPost.slice(0, 2);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full md:px-8">
      {twoPosts?.map((post) => (
        <PostCard key={post._id} post={post} refetch={refetch}></PostCard>
      ))}
    </div>
  );
}

export default DemoPost;
