import {
  Container,
  ImageContainer,
  TextContainer,
  Description,
  Line,
} from "./styles";
import Button from "../Button/index"

export default function Card({
  image,
  title,
  text,
  primary,
  secondary,
  third,
  colorStart,
  colorEnd,
  margin
}) {
  return (
    <Container>
      <ImageContainer src={image} />
      <TextContainer primary={primary} secondary={secondary} third={third}>
        {title}
      </TextContainer>
      <Line />
      <Description primary={primary}>{text}</Description>
      <Button margin="35px" colorStart={colorStart} colorEnd={colorEnd}/>
    </Container>
  );
}
