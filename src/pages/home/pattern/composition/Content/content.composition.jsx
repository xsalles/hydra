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

export default function Content() {
  return (
    <Container>
      <CTAContainer>
        <Title width="457px">
          <ColoredText>Dive </ColoredText>
          Into The Depths
        </Title>
        <Title width="402px" marginTop="4px">
          Of <ColoredText>Virtual reality</ColoredText>
        </Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </Description>
        <ArrowWithButton>
          <Button
            primary
            text="BUILD YOUR WORLD"
            borderSettings="none"
            colorText="#343045"
          />
          <LineTip src={Tip} marginRight="125px" />
        </ArrowWithButton>
      </CTAContainer>
      <ContainerImage src={VRgirl} />
    </Container>
  );
}
