import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="group flex flex-col items-center text-dark">
      <Link
        href={blog.url}
        className=" col-span-12  h-full overflow-hidden rounded-xl lg:col-span-4"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="inline-block w-full text-xs font-semibold uppercase text-accent sm:text-sm dark:text-accentDark">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="my-1 inline-block">
          <h2 className="text-base font-semibold capitalize sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom bg-no-repeat
                transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full text-xs font-semibold capitalize text-gray sm:text-base">
          {format(new Date(blog.publishDate), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
