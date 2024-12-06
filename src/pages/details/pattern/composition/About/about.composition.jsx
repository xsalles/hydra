import {
  AboutText,
  Container,
  ContainerImage,
  TextIntroduction,
} from "./styles";
import VRboy from "../../../../../assets/images/VRwithBorder/VRboy.webp";
import Button from "../../../../../components/Button/index.jsx"

export default function About() {
  return (
    <Container>
      <ContainerImage src={VRboy} alt="" />
      <AboutText>
        <TextIntroduction fontSize="36px" fontWeight="bold" marginTop="5px">
          ABOUT
        </TextIntroduction>
        <TextIntroduction fontSize="36px" fontWeight="300">
          HYDRA VR
        </TextIntroduction>
        <TextIntroduction
          fontSize="16px"
          fontWeight="200"
          marginTop="42px"
          height="228px"
        >
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipiscing at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat semper
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra
          diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudi n tempor.
        </TextIntroduction>
        <Button primary text="LET’S GET IN TOUCH" borderSettings="none" marginTop="28px"/>
      </AboutText>
    </Container>
  );
}
