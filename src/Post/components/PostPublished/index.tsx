import { PostText } from "./PosText";
import { PostMarkdown } from "./PostMarkdown";
import { PostSumary } from "./PostSumary";
import { PostContentCode, PostPubliMain } from "./styles";

export function PostPublished() {
  return (
    <PostPubliMain>
      <PostSumary />
      <PostContentCode>
        <PostText />
        <PostMarkdown />
      </PostContentCode>
    </PostPubliMain>
  );
}
