import { allBlogs } from "contentlayer/generated";
import CoverSection from "@/components/home/coverSection";
import FeaturedPosts from '@/components/home/featuredPosts';
import RecentPosts from '@/components/home/recentPosts';


export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <CoverSection blogs={allBlogs}/>
      <FeaturedPosts blogs={allBlogs}/>
      <RecentPosts blogs={allBlogs}/>
    </main>
  );
}
