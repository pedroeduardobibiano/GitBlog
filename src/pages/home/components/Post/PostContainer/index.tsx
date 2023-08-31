import { Github } from "../../../../../context/context";
import {
  PostContainerBox,
  PostContent,
  PostData,
  PostHeader,
  PostMainBox,
  PostTitle,
} from "./styles";

export interface GitPost {
  post: Github;
}

export function PostContainer({ post }: GitPost) {
  return (
    <PostMainBox to={`/PostPublished/${post.number}`}>
      <PostContainerBox>
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
          <PostData>{post.createdAt}</PostData>
        </PostHeader>
        <PostContent>{post.body}</PostContent>
      </PostContainerBox>
    </PostMainBox>
  );
}
