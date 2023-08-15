import { Issues } from "../../../../Data/data";
import { PostContainer } from "./PostContainer";
import { PostGlobalContainer, PostMain } from "./styles";


export function Post() {
  return (
    <PostGlobalContainer>
      <PostMain>
        {Issues.map((Itens) => {
          return <PostContainer  key={Itens.text} Issue={Itens} />;
        })}
      </PostMain>
    </PostGlobalContainer>
  );
}
