import {
  Container,
  Icon,
  ContainerLetters,
  Letter,
  ContainerNav,
  Item,
  ContainerButtons,
} from "./styles";
import IconImage from "../../../../../assets/images/headerImages/icon.png";
import H from "../../../../../assets/images/headerImages/H.png";
import Y from "../../../../../assets/images/headerImages/Y.png";
import D from "../../../../../assets/images/headerImages/D.png";
import R from "../../../../../assets/images/headerImages/R.png";
import A from "../../../../../assets/images/headerImages/A.png";
import Button from "../../../../../components/Button/index.jsx";
import { useEffect, useState } from "react";
import HamburguerMenu from "../../../../../components/HamburguerMenu/index.jsx"

const items = ["ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO"];
const letters = [H, Y, D, R, A];

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsSmallScreen(window.innerWidth <= 390);
    };
    handleSize();
    
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize)
  });

  return (
    <Container>
      <Icon src={IconImage} />
      <ContainerLetters>
        {letters.map((letter) => (
          <Letter src={letter} />
        ))}
      </ContainerLetters>
      <ContainerNav>
        {items.map((item) => (
          <Item>{item}</Item>
        ))}
      </ContainerNav>
      <ContainerButtons>
        <Button
          colorText="#ffffff"
          text="CONTACT US"
          borderSettings="1px solid #ffffff"
          colorStart="transparent"
          colorEnd="transparent"
        />
        <Button
          text="JOIN TO HYDRA"
          borderSettings="none"
          colorText="#343045"
        />
      </ContainerButtons>

      {isSmallScreen && (
        <HamburguerMenu/>
      )}
    </Container>
  );
}
