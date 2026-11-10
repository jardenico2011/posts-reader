import { usePosts } from "../posts.hooks";
import Post from "./Post";
import { Skeleton } from "@/components/ui/skeleton";

const PostList = () => {
  const { data, isPending, isError, error } = usePosts();

  if (isPending) {
    return (
      <div className="mt-8 grid gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-32 w-full rounded-4xl" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="mt-8 text-sm text-destructive">
        Failed to load posts: {error.message}
      </p>
    );
  }

  if (data.length === 0) {
    return (
      <p className="mt-8 text-sm text-muted-foreground">
        No posts found.
      </p>
    );
  }

  return (
    <div className="mt-8 grid gap-4">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;