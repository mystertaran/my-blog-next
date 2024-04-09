import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  const imagePath = blog.image.filePath.replace("../public", "");
  return (
    <div className="inline-block w-full">
      <article className="relative mx-10 flex h-[85vh] flex-col items-start justify-end">
        <div className="rounded-3x1 absolute bottom-0 left-0 right-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent from-0% to-dark" />
        <Image
          src={imagePath}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w=full rounded-3x1 h-full object-cover object-center"
        />
        <div className="z-0 flex w-3/4 flex-col items-start justify-center p-16 text-light">
          <Link href={`/categories/${blog.tags}`}>{blog.tags}</Link>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default CoverSection;
