import { styled } from "styled-components";

export const PostTextContent = styled.div`
  margin-top: 0.2rem;

  display: flex;
  justify-content: center;
  align-items: center;


  flex-direction: column;

  text-decoration: none;
  font-weight: normal;
  margin-bottom: 2rem;
`;

export const PostTextContainer = styled.p`
  font-size: 1rem;
  line-height: 160%;

  color: ${(props) => props.theme.colors["base-text"]};
`;

export const PostTextTitle = styled.h4`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: underline;

  font-weight: normal;
  margin-top: 1.2rem;
`;
