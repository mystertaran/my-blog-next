import { sortBlogs } from "@/utils";
import React from "react";
import BlogLayoutOne from "@/components/blog/blogLayoutOne";
import BlogLayoutTwo from "@/components/blog/blogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center px-32">
      <h2 className="inline-block w-full text-4xl font-bold capitalize">
        Featured Posts
      </h2>

      <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-6">
        <article className="relative col-span-1 row-span-2">
          <BlogLayoutOne blog={sortedBlogs[2]} />
        </article>
        <article className="relative col-span-1 row-span-1">
          <BlogLayoutTwo />
        </article>
        <article className="relative col-span-1 row-span-1">
          blog layout 2
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
