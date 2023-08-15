import { Perfil } from "./components/Perfil";
import { Post } from "./components/Post";
import { SearchContent } from "./components/SearchContent";
import { HomeContainer } from "./components/styles";

export function Home() {
  return (
    <HomeContainer className="container">
      <Perfil />
      <SearchContent />
      <Post />
    </HomeContainer>
  );
}
