import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostTextContent } from "./styles";

export interface GithubText {
  content: string;
}
export function PostText({ content }: GithubText) {
  return (
    <PostTextContent>
      <ReactMarkdown children={content} />
    </PostTextContent>
  );
}
