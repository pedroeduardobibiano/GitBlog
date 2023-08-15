import { styled } from "styled-components";

export const InputContainer = styled.div`
  margin-top: 4.3rem;
  margin-bottom: 4rem;
`;

export const SearchIssueLegend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const TitlePublished = styled.div`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors["base-subtitle"]};
  line-height: 160%;
  font-weight: bold;
`;
export const QuantityPublished = styled.div`
  font-size: 0.88rem;
  color: ${(props) => props.theme.colors["base-span"]};
  line-height: 160%;
`;

export const InputSearch = styled.div`
  width: 100%;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.125rem;
  background-color: ${(props) => props.theme.colors["base-input"]};
  border: 1px solid ${(props) => props.theme.colors["base-border"]};
  border-radius: 0.375rem;

  ::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
    font-size: 1rem;
    line-height: 160%;
  }

  input {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    background-color: transparent;
    border: none;

    color: ${(props) => props.theme.colors["base-text"]};

    border: 1px solid ${(props) => props.theme.colors["base-border"]};
    border-radius: 0.375rem;

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.blue};
      border-radius: 0.375rem;
    }
  }
`;
