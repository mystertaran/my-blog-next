import { sortBlogs } from "@/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../blog/blogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center px-32">
      <div className="flex w-full justify-between">
        <h2 className="inline-block text-4xl font-bold capitalize">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent underline underline-offset-2"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-16 mt-16">
        {
            sortedBlogs.slice(5, 11).map((blog, index) => {
                return <article className="col-span-1 row-span-1 relative">
                    <BlogLayoutThree blog={blog} />
                </article>
            })
        }
      </div>
    </section>
  );
};

export default RecentPosts;
