"use client"
import axiosSecure from "@/lib";
import PostCard from "../PostCard/PostCard";
import { useQuery } from "@tanstack/react-query";

function AllPost() {
  const { data: allPost = [] } = useQuery({
    queryKey: ['allPost'],
    queryFn: async () => {
      const res = await axiosSecure.get('/posts');
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 w-full md:px-8">
      {allPost?.map((post) => (
        <PostCard key={post._id} post={post}></PostCard>
      ))}
    </div>
  );
}

export default AllPost;
