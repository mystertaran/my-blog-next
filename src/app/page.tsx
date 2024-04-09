import { allBlogs } from "contentlayer/generated";
import CoverSection from "@/components/home/coverSection";



export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <CoverSection blogs={allBlogs}/>
    </main>
  );
}
