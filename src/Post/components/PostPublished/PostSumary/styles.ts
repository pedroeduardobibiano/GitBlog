import { styled } from "styled-components";

export const PostPublishedContainer = styled.div`
  background-color: ${(theme) => theme.theme.colors["base-profile"]};

  min-height: 212px;
  height: 212px;

  border-radius: 0.625rem;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;

  justify-content: center;
  align-items: center;

  `;

export const PostPublishedPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 4.5rem); /* 2.5rem (esquerda) + 2rem (direita) */
  margin-left: 2.5rem;
  margin-right: 2rem;
  height: calc(100% - 4rem);

  display: flex;
`;

export const PostPublishedInfo = styled.div`
  width: 100%;
  height: 100%;
`;
export const PostPublishedLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  text-transform: uppercase;

  font-size: 0.75rem;
  line-height: 160%;
  div{
    color: ${(props) => props.theme.colors.blue};
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      padding-left: 0.5rem;
      margin: 0 auto;
    }
  }

  a {
    color: ${(props) => props.theme.colors.blue};
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      padding-left: 0.5rem;
      margin: 0 auto;
    }
  }
`;
export const PostPublishedBack = styled.div`
  display: flex;
  justify-content: center;
`;

export const PostPublishedGit = styled.div`
  display: flex;
  align-items: center;
`;

export const PostPublishedTitle = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  line-height: 130%;

  font-weight: bold;

  color: ${(props) => props.theme.colors["base-title"]};
`;

export const PostPublishedIcons = styled.div`
  max-width: 100%;
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  color: ${(props) => props.theme.colors["base-span"]};
`;
