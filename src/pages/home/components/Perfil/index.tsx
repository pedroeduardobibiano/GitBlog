import {
  Icons,
  LogoGitAccess,
  PerfilContainer,
  PerfilContent,
  PerfilImage,
  PerfilMain,
  PerfilStatus,
  SubTitle,
  Title,
} from "./styles";

import { ProfileIcons } from "../../../../components/ProfileIcons";

import gitImage from "../../../../../public/Icons/gitLogo.png";
import ImgPerfil from "../../../../../public/Icons/perfilLogo.png";
import work from "../../../../../public/Icons/workLogo.png";
import gitAccess from "../../../../../public/Icons/gitAccess.png";
import { useContext } from "react";
import { NewGitProvider } from "../../../../context/context";

export function Perfil() {
  const { perfil } = useContext(NewGitProvider);


  return (
    <PerfilContainer>
      {perfil.map((perfilItem) => {
        return (
          <PerfilMain key={perfilItem.id}>
            <PerfilImage>
              <img src={perfilItem.avatar_url} alt="" />
            </PerfilImage>
            <PerfilStatus>
              <PerfilContent>
                <Title>{perfilItem.name}</Title>
                <LogoGitAccess>
                  <a href={perfilItem.html_url} target="blank">
                    github
                    <img src={gitAccess} alt="" />
                  </a>
                </LogoGitAccess>
              </PerfilContent>
              <SubTitle>{perfilItem.bio}</SubTitle>
              <Icons>
                <ProfileIcons
                  icons={<img src={gitImage} alt="nome do usuario no github" />}
                  title={perfilItem.login}
                />
                <ProfileIcons
                  icons={<img src={work} alt="nome da empresa onde trabalha" />}
                  title={perfilItem.company == null ? 'Não registrado' : perfilItem.company}
                />
                <ProfileIcons
                  icons={<img src={ImgPerfil} alt="numero de seguidores" />}
                  title={`${perfilItem.followers} ${"seguidores"}`}
                />
              </Icons>
            </PerfilStatus>
          </PerfilMain>
        );
      })}
    </PerfilContainer>
  );
}
