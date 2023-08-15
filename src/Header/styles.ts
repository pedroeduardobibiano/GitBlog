import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  align-items: center;
  justify-content: space-between;
  height: 296px;

  grid-template-columns: 1fr 1fr 1fr;

  background: linear-gradient(
  180deg,
  rgba(11, 27, 43, 1) 0%,
  rgba(12, 35, 59, 1) 35%,
  rgba(12, 33, 55, 1) 100%
);
`;

export const IconHeader = styled.header`
  img {
    width: 45px;
    height: 40px;
  }
`;

export const TextHeader = styled.div`
  color: ${(props) => props.theme.colors.blue};
  font-size: 1.5rem;
`;

export const EffectContainer = styled.div`
  padding: 0;
  margin: 0 auto;
  img {
    width: 371px;
    height: 236px;
  }
`;

export const HeaderMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  flex-direction: column;

  gap: 1.4rem;
  margin-top: -5rem;
`;
