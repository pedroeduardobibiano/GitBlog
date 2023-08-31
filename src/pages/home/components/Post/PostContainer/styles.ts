import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PostMainBox = styled(Link)`
cursor: pointer;
  :hover {
    border-color: ${(props) => props.theme.colors["base-label"]};
  }
`;

export const PostContainerBox = styled.div`
  width: 416px;
  height: 260px;

  border-radius: 0.625rem;

  background-color: ${(props) => props.theme.colors["base-post"]};

  padding: 2rem;

  border: 1px solid transparent;
`;

export const PostHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  margin-bottom: 0.8rem;
`;

export const PostTitle = styled.div`
  font-size: 1.25rem;
  line-height: 160%;
  color: ${(props) => props.theme.colors["base-title"]};
  padding-right: 2rem;
  flex: 3;

  font-weight: bold;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const PostData = styled.div`
  font-size: 0.88rem;
  line-height: 160%;
  color: ${(props) => props.theme.colors["base-span"]};

  display: flex;
  justify-content: end;
`;

export const PostContent = styled.div`
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme.colors["base-text"]};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;
