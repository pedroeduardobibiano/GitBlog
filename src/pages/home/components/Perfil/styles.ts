import { styled } from "styled-components";

export const PerfilContainer = styled.div`
  background-color: ${(theme) => theme.theme.colors["base-profile"]};

  width: 864px;
  min-height: 212px;
  height: 212px;
  margin: 0 auto;

  border-radius: 0.625rem;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const PerfilMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 4.5rem); /* 2.5rem (esquerda) + 2rem (direita) */
  margin-left: 2.5rem;
  margin-right: 2rem;
  height: calc(100% - 4rem);
`;

export const PerfilImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;

  img {
    max-width: 9.25rem;
    max-height: 9.25rem;

    border-radius: 0.5rem;
  }
`;

export const PerfilContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PerfilStatus = styled.div`
  flex: 3.4;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 130%;
  padding-top: 0.7rem;
  color: ${(props) => props.theme.colors["base-title"]};
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme.colors["base-text"]};
`;

export const Icons = styled.div`
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

`;

export const LogoGitAccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-right: 0.6rem;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors.blue};

    font-size: 0.75rem;
    line-height: 160%;
    display: flex;
    align-items: center;
    img {
      margin: 0 auto;
      padding-left: 0.5rem;
    }
  }
`;
