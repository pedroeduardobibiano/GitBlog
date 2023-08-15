import { styled } from "styled-components";

export const PostMarkDown = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  padding: 2rem;

  background-color: ${(props) => props.theme.colors["base-post"]};
`;
