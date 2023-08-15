import {
  EffectContainer,
  HeaderContainer,
  HeaderMiddle,
  IconHeader,
  TextHeader,
} from "./styles";
import Image from "../../public/images/Vector.svg";
import EffectRight from "../../public/images/effect_right.png";
import EffectLeft from "../../public/images/effect _left.png";
export function Header() {
  return (
    <HeaderContainer>
      <EffectContainer>
        <img src={EffectLeft} alt="" id="left"/>
      </EffectContainer>

      <HeaderMiddle>
        <IconHeader>
          <img src={Image} alt=""/>
        </IconHeader>
        <TextHeader>GITHUB BLOG</TextHeader>
      </HeaderMiddle>

      <EffectContainer>
        <img src={EffectRight} alt="" id="rgt"/>
      </EffectContainer>
    </HeaderContainer>
  );
}
