import { useContext } from "react";
import {
  InputContainer,
  InputSearch,
  QuantityPublished,
  SearchIssueLegend,
  TitlePublished,
} from "./styles";
import { NewGitProvider } from "../../../../context/context";

export function SearchContent() {

const {countPosts} = useContext(NewGitProvider)

  return (
    <InputContainer>
      <SearchIssueLegend>
        <TitlePublished>Publicações</TitlePublished>
        <QuantityPublished>{countPosts} publicações</QuantityPublished>
      </SearchIssueLegend>

      <InputSearch>
        <input placeholder="Buscar conteúdo" />
      </InputSearch>
    </InputContainer>
  );
}
