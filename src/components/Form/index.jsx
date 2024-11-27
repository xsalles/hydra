import {
  Container,
  ContainerInput,
  Line,
  SubTitle,
  TextInput,
  Title,
} from "./styles";
import Button from "../Button/index";

export default function Form({ height, padding }) {
  return (
    <Container>
      <Title>JOIN HYDRA</Title>
      <Line />
      <SubTitle>Let’s Build Your VR Experience</SubTitle>
      <ContainerInput primaryContainer primaryContainerMargin>
        <TextInput
          placeholder="First name"
          primaryContainer
          padding="27px 404px 28px 42px"
        />
        <TextInput
          placeholder="Last name"
          primaryContainer
          padding="27px 404px 28px 42px"
        />
      </ContainerInput>
      <ContainerInput primaryContainer secondaryContainerMargin>
        <TextInput
          placeholder="Email"
          primaryContainer
          padding="27px 404px 28px 42px"
        />
        <TextInput
          placeholder="Phone Number"
          primaryContainer
          padding="27px 404px 28px 42px"
        />
      </ContainerInput>
      <ContainerInput>
        <TextInput
          placeholder="Subject"
          height="72px"
          padding="27px 404px 28px 42px"
        />
        <TextInput
          placeholder="Tell us something..."
          height="210px"
          padding="27px 879px 166px 42px"
          responsiveBiggerContainer
          paddingResponsiveBiggerContainer
        />
      </ContainerInput>

      <Button primary margin="51px" text="SEND TO HYDRA"/>
    </Container>
  );
}
