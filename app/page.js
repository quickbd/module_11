import Slideshow from "@/components/Slideshow";
import Blog from "./blog/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Slideshow />
      <Blog />
    </main>
  );
}
