import {
  InputContainer,
  InputSearch,
  QuantityPublished,
  SearchIssueLegend,
  TitlePublished,
} from "./styles";

export function SearchContent() {
  return (
    <InputContainer>
      <SearchIssueLegend>
        <TitlePublished>Publicações</TitlePublished>
        <QuantityPublished>6 publicações</QuantityPublished>
      </SearchIssueLegend>

      <InputSearch>
        <input placeholder="Buscar conteúdo" />
      </InputSearch>
    </InputContainer>
  );
}
