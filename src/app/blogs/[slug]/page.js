import Tag from "@/components/elements/tag";
import Image from "next/image";
import BlogDetails from "@/components/blog/blogDetails"
import { allBlogs } from "contentlayer/generated";

export default function BlogPage({ params }) {
  const decodedSlug = decodeURIComponent(params.slug); // Dekodowanie params.slug

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === decodedSlug);

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${blog.tags[0]}`}
            className="px-6 py-2 text-sm"
          />
          <h1 className="relative mt-6 inline-block w-5/6 text-5xl font-semibold capitalize leading-normal text-light">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square h-full w-full object-cover object-center"
        /></div>
        <BlogDetails blog={blog} slug={params.slug}/>
    </article>
  );
}
