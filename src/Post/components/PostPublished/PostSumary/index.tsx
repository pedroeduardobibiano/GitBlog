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

import { CaretLeft } from "phosphor-react";

export function PostSumary() {
  return (
    <PostPublishedContainer className="container">
      <PostPublishedPerfil>
        <PostPublishedInfo>
          <PostPublishedLinks>
            <PostPublishedBack>
              <a href="">
                <CaretLeft size={18} />
                voltar
              </a>
            </PostPublishedBack>
            <PostPublishedGit>
              <a href="">
                github
                <img src={gitAccess} alt="" />
              </a>
            </PostPublishedGit>
          </PostPublishedLinks>
          <PostPublishedTitle>
            JavaScript data types and data structures
          </PostPublishedTitle>
          <PostPublishedIcons>
            <ProfileIcons icons={<img src={Git} alt="" />} title="cameronwll" />
            <ProfileIcons
              icons={<img src={Calendar} alt="" />}
              title="Há um dia"
            />
            <ProfileIcons
              icons={<img src={Message} alt="" />}
              title="5 comentarios"
            />
          </PostPublishedIcons>
        </PostPublishedInfo>
      </PostPublishedPerfil>
    </PostPublishedContainer>
  );
}
