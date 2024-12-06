import { ArrowButton, Container, ImageButton } from "./styles";
import Arrow from "../../assets/images/carrossel/arrow.svg"

export default function Carrossel() {
  return (
    <Container>
      <ArrowButton>
        <ImageButton src={Arrow}></ImageButton>
      </ArrowButton>
    </Container>
  );
}
