import { LineTip } from "../../../../../components/Arrow/styles";
import Button from "../../../../../components/Button";
import {
  ArrowWithButton,
  ColoredText,
  Container,
  ContainerImage,
  CTAContainer,
  Description,
  Title,
} from "./styles";
import Tip from "../../../../../assets/images/arrowImages/tip.svg";
import VRgirl from "../../../../../assets/images/VRwithBorder/VRgirl.svg";
import { useState, useEffect } from "react";

export default function Content() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsSmallScreen(window.innerWidth <= 390);
    };
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  });

  return (
    <Container>
      <CTAContainer>
        <Title widthSmallDevice="298px" width="457px">
          <ColoredText fontSizeColoredTextSmallDevice="36px">Dive </ColoredText>
          Into The Depths
        </Title>
        <Title widthSmallDevice="274px" width="402px" marginTop="4px">
          Of{" "}
          <ColoredText fontSizeColoredTextSmallDevice="32px">
            Virtual reality
          </ColoredText>
        </Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </Description>
        <ArrowWithButton>
          {isSmallScreen ? (
            <Button
              primary
              borderSettings="none"
              text="BUILD YOUR WORLD"
              colorText="#343035"
            />
          ) : (
            <>
              <Button
                primary
                text="BUILD YOUR WORLD"
                borderSettings="none"
                colorText="#343045"
              />
              <LineTip src={Tip} marginRight="125px" />
            </>
          )}
        </ArrowWithButton>
      </CTAContainer>
      <ContainerImage src={VRgirl} />
    </Container>
  );
}
