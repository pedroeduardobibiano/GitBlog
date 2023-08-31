import { useContext } from "react";
import { PostContainer } from "./PostContainer";
import { PostGlobalContainer, PostMain } from "./styles";
import { NewGitProvider } from "../../../../context/context";

export function Post() {
  const { issue } = useContext(NewGitProvider);

  return (
    <PostGlobalContainer>
      <PostMain>
        {issue.map((post) => {
          return <PostContainer key={post.number} post={post} />;
        })}
      </PostMain>
    </PostGlobalContainer>
  );
}
