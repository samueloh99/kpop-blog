import { CommentsPosts } from "@/components/posts/commentsposts";
import { ContentPosts } from "@/components/posts/contentposts";
import { HeaderPost } from "@/components/posts/headerposts";

export default function Home() {
  return (
    <main className="flex flex-col main-container pt-10 gap-20">
      <HeaderPost />
      <ContentPosts />
      <CommentsPosts />
    </main>
  );
}
