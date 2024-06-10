import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../elements/tag";

const CoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  const imagePath = blog.image.filePath.replace("../public", "");
  return (
    <div className="inline-block w-full">
      <article className="relative mx-10 flex h-[85vh] flex-col items-start justify-end">
        <div className="rounded-3x1 absolute bottom-0 left-0 right-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent from-0% to-dark/90" />
        <Image
          src={imagePath}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full rounded-3xl h-full object-cover object-center -z-10"
        />
        <div className="z-0 flex w-3/4 flex-col items-start justify-center p-16 text-light">
          <Tag link={`/categories/${blog.tags}`} name={blog.tags} />
          <Link href={blog.url} className="mt-6">
            <h1 className="text-4xl font-bold capitalize">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-4 text-xl font-in">{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default CoverSection;
