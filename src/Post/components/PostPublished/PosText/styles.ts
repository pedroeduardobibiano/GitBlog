import { styled } from "styled-components";

export const PostTextContent = styled.section`
   display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 8rem;
  line-height: 190%;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.blue};
  }

  ul {
    list-style: inherit;
  
  }

  pre {
    background: ${({ theme }) => theme.colors["base-post"]};
    padding: 1rem;
  }
`;

