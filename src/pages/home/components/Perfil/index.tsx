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
      <PerfilMain key={perfil.id}>
        <PerfilImage>
          <img src={perfil.avatar_url} alt="" />
        </PerfilImage>
        <PerfilStatus>
          <PerfilContent>
            <Title>{perfil.name}</Title>
            <LogoGitAccess>
              <a href={perfil.html_url} target="blank">
                github
                <img src={gitAccess} alt="" />
              </a>
            </LogoGitAccess>
          </PerfilContent>
          <SubTitle>{perfil.bio}</SubTitle>
          <Icons>
            <ProfileIcons
              icons={<img src={gitImage} alt="nome do usuario no github" />}
              title={perfil.login}
            />
            <ProfileIcons
              icons={<img src={work} alt="nome da empresa onde trabalha" />}
              title={perfil.company == null ? "Não registrado" : perfil.company}
            />
            <ProfileIcons
              icons={<img src={ImgPerfil} alt="numero de seguidores" />}
              title={`${perfil.followers} ${"seguidores"}`}
            />
          </Icons>
        </PerfilStatus>
      </PerfilMain>
    </PerfilContainer>
  );
}
