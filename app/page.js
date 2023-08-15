import Slideshow from "@/components/Slideshow";
import Blog from "./blog/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Slideshow />
      <div className="max-w-[1240px]  m-auto ">
        <Blog />
      </div>
    </main>
  );
}
