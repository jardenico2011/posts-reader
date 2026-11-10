import { Link } from "react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post as PostType } from "../posts.types";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  return (
    <Link to={`/posts/${post.id}`} aria-label={`Read post ${post.id}: ${post.title}`}>
      <Card size="sm" className="transition-colors hover:bg-accent">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardAction className="text-muted-foreground">
            #{post.id}
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-muted-foreground">{post.body}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Post;