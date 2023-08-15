import {
  PostContainerBox,
  PostContent,
  PostData,
  PostHeader,
  PostMainBox,
  PostTitle,
} from "./styles";

interface IssuesProps {
  title: string;
  text: string;
  data: string;
}

interface Issues {
  Issue: IssuesProps;
}

export function PostContainer({ Issue }: Issues) {
  return (
    <PostMainBox>
      <PostContainerBox>
        <PostHeader>
          <PostTitle>{Issue.title}</PostTitle>
          <PostData>{Issue.data}</PostData>
        </PostHeader>
        <PostContent>{Issue.text}</PostContent>
      </PostContainerBox>
    </PostMainBox>
  );
}
