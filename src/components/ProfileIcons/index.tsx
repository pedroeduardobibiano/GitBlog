import { ReactNode } from "react";
import { ContainerIconTotal, IconContainer } from "./styles";

interface IconsProps {
  icons: ReactNode;
  title: string | ReactNode;
}

export function ProfileIcons({ icons, title }: IconsProps) {
  return (
    <ContainerIconTotal>
      <IconContainer>{icons}</IconContainer>
      {typeof title == "string" ? <p>{title}</p> : title}
    </ContainerIconTotal>
  );
}
