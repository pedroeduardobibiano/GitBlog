import { ProfileIcons } from "../../../../components/ProfileIcons";
import {
  PostPublishedBack,
  PostPublishedContainer,
  PostPublishedGit,
  PostPublishedIcons,
  PostPublishedInfo,
  PostPublishedLinks,
  PostPublishedPerfil,
  PostPublishedTitle,
} from "./styles";

import Git from "../../../../../public/Icons/gitLogo.png";
import Calendar from "../../../../../public/Icons/calendar.png";
import Message from "../../../../../public/Icons/message.png";

import gitAccess from "../../../../../public/Icons/gitAccess.png";

import { CaretLeft, Spinner } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Github } from "../../../../context/context";
// import {  NewGitProvider } from "../../../../context/context";
// import {  useContext } from "react";

export interface GithubPerfil {
  issue: Github;
  isLoading: boolean;
}

export function PostSumary({ issue, isLoading }: GithubPerfil) {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <PostPublishedContainer className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <PostPublishedPerfil>
          <PostPublishedInfo>
            <PostPublishedLinks>
              <PostPublishedBack>
                <div onClick={goBack}>
                  <CaretLeft size={18} />
                  voltar
                </div>
              </PostPublishedBack>
              <PostPublishedGit>
                <a href="">
                  github
                  <img src={gitAccess} alt="" />
                </a>
              </PostPublishedGit>
            </PostPublishedLinks>
            <PostPublishedTitle>{issue.title}</PostPublishedTitle>
            <PostPublishedIcons>
              <ProfileIcons
                icons={<img src={Git} alt="" />}
                title={issue.user.login}
              />
              <ProfileIcons
                icons={<img src={Calendar} alt="" />}
                title={issue.createdAt}
              />
              <ProfileIcons
                icons={<img src={Message} alt="" />}
                title={`${issue.comments} comentarios `}
              />
            </PostPublishedIcons>
          </PostPublishedInfo>
        </PostPublishedPerfil>
      )}
    </PostPublishedContainer>
  );
}
