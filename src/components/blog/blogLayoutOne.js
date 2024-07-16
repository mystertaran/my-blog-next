import React from "react";
import Tag from "@/components/elements/tag";
import Link from "next/link";
import Image from "next/image";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full rounded-xl bg-gradient-to-b from-transparent from-0% to-dark/90" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="h-full w-full rounded-xl object-cover object-center"
      />
      <div className="absolute bottom-0 z-20 w-full p-10">
        <Tag
          link={`/categories/${blog.tags}`}
          name={blog.tags}
          className="!border px-6 py-2 text-sm"
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="mt-4 text-2xl font-bold capitalize text-light">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
